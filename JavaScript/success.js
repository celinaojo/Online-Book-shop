window.onload = () =>{

//This retrieves the last 4 digits of the card number from local storage and displays a success message to the user, confirming that their purchase was successful and showing the last 4 digits of the card that was charged. The message is displayed in an HTML element with the ID "success_message".
const la4 = localStorage.getItem("last4");
const success_message = document.getElementById("success_message");
success_message.innerHTML = ` Thank you for your purchase! <br>`;
success_message.innerHTML += ` Your card ending in **** **** **** ${la4} has been charged.`;

};