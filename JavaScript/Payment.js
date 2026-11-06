// This JavaScript code is responsible for handling the payment form submission, validating the input data, and sending it to the server for processing. It also handles the response from the server and displays appropriate messages to the user.

window.onload = () =>{

    // This adds an event listener to the submit button, which triggers when the button is clicked. It prevents the default form submission behavior and performs validation on the input fields before sending the data to the server.
    document.getElementById("submit_button").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // This retrieves the values from the input fields for card number, expiration month, expiration year, and CVV code. It also defines regular expressions for validating the card number and CVV code.
    const cc= document.getElementById("Card_number").value
    const exp_month = document.getElementById("Month").value
    const exp_year = document.getElementById("Year").value
    const cvv = document.getElementById("CVV").value

    // This validates the card number using a regular expression that checks for a MasterCard format (starting with 51-55 and followed by 14 digits). If the card number is not valid, it displays an alert message and reloads the page.
    const cc_reg =/^5[1-5][0-9]{14}$/
    if(!cc.match(cc_reg)){
        alert("Card number is not valid!")
        reload()
        return (1)
    }

    // This validates the CVV code using a regular expression that checks for exactly 3 digits. If the CVV code is not valid, it displays an alert message and reloads the page.
    const cvv_reg =/^\d{3}$/
    if(!cvv.match(cvv_reg)){
        alert("CVV is not valid!")
        reload()
        return (1)
    }

    // This checks if the card has expired by comparing the expiration year and month with the current date. If the card has expired, it displays an alert message and reloads the page.
    today = new Date()
    t_month = today.getMonth() + 1
    t_year = today.getFullYear()
    if (exp_year < t_year || (exp_year == t_year && exp_month < t_month)){
        alert("Card has expired!")
        reload()
        return (1)
    }

    // This creates a data object containing the card information to be sent to the server. It includes the card number, expiration month, expiration year, and CVV code.
    const data =
    {
        "master_card": cc,
        "exp_month": exp_month,
        "exp_year": exp_year,
        "cvv_code": cvv
    }
    
    // This defines the URL of the server endpoint that will process the payment information. It then uses the Fetch API to send a POST request to the server with the card data in JSON format. The response from the server is handled to display appropriate messages to the user based on the status code.
    const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard"

    // This sends a POST request to the server with the card data in JSON format. It then checks the response status code to determine if the request was successful (200), if there was a bad request (400), or if there was some other error. Based on the status code, it either processes the response JSON and displays a success message, or throws an error message that is caught and displayed to the user.
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response =>{
        if (response.status === 200){
            return response.json()
        } else if (response.status === 400){
          throw "Bad data was sent to the server";
        } else {
            throw "Something that went wrong";
    }
    })
    .then(resJson =>{
        alert(resJson.message);
        const last4 = cc % 10000;
        localStorage.setItem("last4", last4); 
        window.open("success.html")
    })

    .catch(error =>{
        alert(error);})
}
)
}