function getCar() {
    document.getElementById('output').value = 'Loading...';
    fetch('/car')  // Fixed: "fetchtch" to "fetch"
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').value = 'Error fetching data';
        });
}

document.getElementById('fetchButton').addEventListener('click', getCar);