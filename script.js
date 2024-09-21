
var x = window.matchMedia("(min-width: 48em)");
x.addEventListener('change', function() {
    var mainCard = document.getElementsByClassName("main_SignupForm")[0];
    mainCard.getElementsByClassName('illustrateDesktop')[0].classList.toggle('hidden');
    mainCard.getElementsByClassName('illustrateMobile')[0].classList.toggle('hidden');
});