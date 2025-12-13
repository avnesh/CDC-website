function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading partial:', filePath, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML("header", "partials/header.html");
    loadHTML("footer", "partials/footer.html");

    // Mobile Menu Toggle (Event Delegation)
    document.body.addEventListener('click', function (event) {
        if (event.target.closest('.mobile-menu-btn')) {
            const navLinks = document.querySelector('.nav-links');
            const icon = document.querySelector('.mobile-menu-btn i');

            navLinks.classList.toggle('active');

            // Toggle Icon
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ri-menu-3-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-3-line');
            }
        }
    });
});
