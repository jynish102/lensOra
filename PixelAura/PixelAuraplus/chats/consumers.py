import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.db import connection
from asgiref.sync import sync_to_async


class ChatConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.username = self.scope["url_route"]["kwargs"]["username"]
        self.room_group_name = f"chat_{self.username}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()
        print("✅ WS CONNECTED:", self.username)

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data["message"]

        # ✅ Get sender from session
        sender = self.scope["session"].get("user")
        receiver = self.username

        if not sender:
            sender = "guest"

        # Save message to MySQL
        await self.save_message(sender, receiver, message)

        # Send message to room
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": sender
            }
        )

    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            "message": event["message"],
            "sender": event["sender"]
        }))

    # MYSQL SAVE FUNCTION
    @sync_to_async
    def save_message(self, sender, receiver, message):
        with connection.cursor() as cursor:
            cursor.execute("""
                INSERT INTO chats (sender, receiver, message, create_at)
                VALUES (%s, %s, %s, NOW())
            """, [sender, receiver, message])
