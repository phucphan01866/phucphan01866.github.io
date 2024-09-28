var x = window.matchMedia("(min-width: 40em)");
var mainCard = document.getElementsByClassName("mainScreen")[0];   
var successCard = document.getElementsByClassName("successScreen")[0];   
var illustrations = mainCard.querySelectorAll('img');
var switchCard = document.querySelectorAll('.mainScreen, .successScreen');
var form = document.getElementsByTagName('form')[0];

//When open website for the 1rst time
if (x.matches) {
    mainCard.classList.add("center");
    successCard.classList.add("center");
    for (var i = 0; i < illustrations.length; i++) {
        illustrations[i].classList.toggle("hidden");
    } 
}

form.addEventListener('submit', (e)=>{e.preventDefault(e);})

function toggleCard() {
    for (var i = 0; i < switchCard.length; i++) {
        switchCard[i].classList.toggle("hidden");
    }
}

function showError() {
    form.getElementsByClassName("errorStatement")[0].style.display = "block";
}

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function buttonClicked(e) {    
    var data = Object.fromEntries(new FormData(e.target));

    // Check if the email field exists in the data
    if (data.userEmail && emailRegex.test(data.userEmail)) {
        form.getElementsByTagName('input')[0].classList.remove("errorInput"); 
        form.getElementsByClassName("errorStatement")[0].style.display = "none";
        toggleCard();
    }
    else {
        // Log a message if the error element is not found
        if (!form.getElementsByClassName("errorStatement")[0]) {
            console.log("Error element not found");
        }
        form.getElementsByTagName('input')[0].classList.add("errorInput"); 
        showError();
    }   
}   

form.addEventListener('submit', buttonClicked);
