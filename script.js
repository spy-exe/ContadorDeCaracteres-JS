const input = document.getElementById('text-input');
const counter = document.getElementById('counter');

input.addEventListener('input', function() {
    counter.textContent = input.value.length + ' caracteres';
});