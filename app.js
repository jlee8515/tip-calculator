function calculateTip() {
    //declare variables
    let billAmt = document.getElementById("billAmt").value;
    let servQual = document.getElementById("servQual").value;
    let numOfPeople = document.getElementById("numOfPeople").value;

    //If nothing is entered into input boxes
    if (billAmt === "" || servQual === 0) {
      alert("Please enter values!");
      return;//had this after curly brackets and ran into issues...function stopped because return statement is out of the if statement
    }

    //Check to see if numOfPeople is empty or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    //Calculate Tip function
    let sumNum = (billAmt * servQual) / numOfPeople;
    //round to 2 decimal places
    sumNum = Math.round(sumNum * 100) / 100;
    //Display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = sumNum.toFixed(2);
  }
  //Hide tip on load
  //document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  //calling function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };