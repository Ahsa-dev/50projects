document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('#expanding-cards .card');
    cards.forEach(card => card.addEventListener('click', toggleActive));
});

function toggleActive(event){
    document.querySelectorAll('#expanding-cards .card').forEach(card => card.classList.remove('active'));
    event.target.classList.add('active');
}