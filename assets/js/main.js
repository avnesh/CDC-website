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
});
