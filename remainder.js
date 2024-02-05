document.getElementById('addMedBtn').addEventListener('click', function() {
    var medName = document.getElementById('medName').value;
    var medTime = document.getElementById('medTime').value;

    var medItem = document.createElement('div');
    medItem.classList.add('med-item');
    medItem.innerHTML = `
        <p class="med-name">${medName}</p>
        <p class="med-time">${medTime}</p>
    `;
    document.getElementById('medList').appendChild(medItem);

    // Clear input fields
    document.getElementById('medName').value = '';
    document.getElementById('medTime').value = '';
});
