
const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";


    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    // alert(totalGrades);

    let perc = (totalGrades / 400) * 100;
    // alert(perc);    

    debugger;

    if (perc <= 100 && perc >= 80 && wd >= 33 && maths >= 33 && comp >= 33 && phy >= 33) {
        grades = 'A';
    } else if (perc <= 79 && perc >= 60 && wd >= 33 && maths >= 33 && comp >= 33 && phy >= 33) {
        grades = 'B';
    } else if (perc <= 59 && perc >= 40 && wd >= 33 && maths >= 33 && comp >= 33 && phy >= 33) {
        grades = 'C';
    }
    else {
        grades = 'F';
    }

    if (perc >= 33 && wd >= 33 && maths >= 33 && comp >= 33 && phy >= 33) {
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }

    else {
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }


}


