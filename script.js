
function call() {
    var weight = parseFloat(document.getElementsByClassName("weight")[0].value);
    var height = parseFloat(document.getElementsByClassName("height")[0].value)*0.3048;
    if (height >0 && weight >0) {
        var bmi = weight / (height * height);
        document.getElementsByClassName("output")[0].value = bmi.toFixed(3);
        if (bmi < 18.5) {
            document.getElementsByClassName("message")[0].value = "You are Unhealthy,Too thin.";
        }
        else if (bmi > 18.5 && bmi < 25) {
            document.getElementsByClassName("message")[0].value = "You are very Healthy.";
        } 
        else if (bmi > 25 && bmi<30) {
            document.getElementsByClassName("message")[0].value = "You have overweight.";
        }
        else {
            document.getElementsByClassName("message")[0].value = "Your condition is serious.";
        }
    }
    else {
        alert("!!Data you have entered might be incorrect.Please check and try again.");
    }
};

