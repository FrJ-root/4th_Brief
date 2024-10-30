// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const name2 = document.getElementById('name2');
// const name = document.getElementById('name');

function showSection(sectionNumber) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');
}

function nextSection(sectionNumber) {
    showSection(sectionNumber);
}

function prevSection(sectionNumber) {
    showSection(sectionNumber);
}

function submitForm(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("FormSections").reset();
    showSection(1);
}

function showSection(sectionNumber) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');
}

function nextSection(sectionNumber) {
    showSection(sectionNumber);
}

function prevSection(sectionNumber) {
    showSection(sectionNumber);
}

function submitForm(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("FormSections").reset();
    showSection(0);
}

document.addEventListener('DOMContentLoaded', () => showSection(0));