document.addEventListener("DOMContentLoaded", () => {
    const currentURL = window.location.pathname;

    document.querySelectorAll(".ac-link-item").forEach(link => {
        const linkURL = link.getAttribute("href");

        // Django URL contains full path, not filename
        if (currentURL === linkURL || currentURL.startsWith(linkURL)) {
            link.classList.add("active");
        }
    });
});
