function loadContent(service) {
    fetch(`/content/${service}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('main-content').innerHTML = data.content;
        })
        .catch(error => console.error('Error:', error));
}
