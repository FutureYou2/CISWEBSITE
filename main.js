fetch("nav.html")
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        const placeholder = document.getElementById("nav-bar-placeholder");
        if (placeholder) placeholder.innerHTML = data;
    })
    .catch(error => console.error("Failed to load the nav", error));