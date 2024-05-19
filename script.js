$.ajax("https://api.adviceslip.com/advice", {
    success: function(response) {
       var dailyAdvice = document.getElementById("adviceP");
       dailyAdvice.innerHTML = JSON.parse(response).slip.advice;
    }
});