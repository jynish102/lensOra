// sidebar.js
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".ac-link-item").forEach(link => {
        const page = link.getAttribute("href");
        if (currentPage === page) {
            link.classList.add("active");
        }
    });
});
