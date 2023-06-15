function updaterate() {
    var retreaval = document.getElementById("rate").value;
    // .value is for when you want to get the value from the element 
    document.getElementById("rate_val").innerText = retreaval;
    //.innertext will replace anyything inside the element with the text
}
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(interest) + parseFloat(principal);
    var result = document.getElementById("result");
    // this will turn the input into an actual year like 2022
    var year = new Date().getFullYear() + parseInt(years);
    if (principal <= 0) {
        window.alert("please bund marwayen");
        document.getElementById("principal").focus();
    }
    //Note that when writing < or > within quotation marks, you must instead type \< or \>
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\>at an interest rate of " + "<mark>" + rate + "</mark>" + "%\<br\>You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\>in the year " + "<mark>" + year + "<mark>" + "\<br\>";
    }
}
