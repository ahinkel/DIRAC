const csvUrl = 'college_ira_data.csv'; // URL to CSV file to search

document.getElementById('searchInput').addEventListener('input', filterTable);

let csvData = [];

function fetchCSV() {
    Papa.parse(csvUrl, {
        header: true,
        download: true,
        complete: function(results) {
            csvData = results.data;
            displayTable(csvData);
        },
        error: function(error) {
            console.error("Error fetching CSV:", error);
        }
    });
}

function displayTable(data) {
    const table = document.getElementById('csvTable');
    const thead = table.querySelector('thead tr');
    const tbody = table.querySelector('tbody');

    // Clear previous content
    thead.innerHTML = '';
    tbody.innerHTML = '';

    if (data.length === 0) return;

    // Add headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        thead.appendChild(th);
    });

    // Add rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function filterTable() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = csvData.filter(row => {
        return Object.values(row).some(value => value.toLowerCase().includes(searchText));
    });
    displayTable(filteredData);
}

// Fetch and parse CSV on page load
fetchCSV();
