/**************Coding Challenge 1 */

/**BMI = mass / (height * height) */

/***var massMark = 70;
var heightMark = 121.5;

var massjohn = 83;
var heightjohn = 100.5;

bmiMark = massMark / (heightMark * heightMark);
bmijohn = massjohn / (heightjohn * heightjohn);

markGreater = bmiMark > bmijohn;

console.log(bmiMark);
console.log(bmijohn);

console.log("Is Mark's BMI higher than john's? ", markGreater);**/


/**************Coding Challenge 2 */

/**Average = sum/total */

/***var aveMark = (116 + 94 + 123) / 3;
var avejohn = (116 + 94 + 123) / 3;

if (aveMark > avejohn) {
    console.log("Mark's team is the winner with an average score of ", aveMark)
} else if (avejohn > aveMark) {
    console.log("john's team is the winner with an average score of ", avejohn)
} else {
    console.log("It's a draw!!!")
}**/


/****EXTRA */

/*ar aveMark = (116 + 94 + 123) / 3;
var avejohn = (198 + 94 + 123) / 3;
var aveMary = (97 + 134 + 105) / 3

if (aveMark > avejohn && aveMary) {
    console.log("Mark's team is the winner with an average score of ", aveMark)
} else if (avejohn > aveMark && aveMary) {
    console.log("john's team is the winner with an average score of ", avejohn)
} else if (aveMary > aveMark && avejohn) {
    console.log("Mary's team is the winner with an average score of ", aveMary)
} else {
    console.log("It's a draw!!!")
}*/


/**************Coding Challenge 3 */

/**************TIP CALCULATOR */

/*function tipCalulator(bill) {
    var tip;
    if (bill < 50) {
        tip = 0.2 * bill;
    } else if (bill > 50 && bill < 200) {
        tip = 0.15 * bill;
    } else {
        tip = 0.1 * bill;
    }
    return tip;
}

var bills = [124, 48, 268];

var tip = [tipCalulator(bills[0]), 
            tipCalulator(bills[1]), 
            tipCalulator(bills[2])];
var amounts = [bills[0] + tip[0],
                bills[1] + tip[1], 
                bills[2] + tip[2]];

console.log(tip);
console.log(amounts);
*/

/**************Coding Challenge 4 */

/**BMI = mass / (height * height) */



/*var john = {
    fullName: 'john Smith',
    mass: 83,
    height: 100.5,
    bmiCalc: function() {
        this.BMI = this.mass / (this.height * this.height)
    }
};

var Mark = {
    fullName: 'Mark Robbin',
    mass: 70,
    height: 121.5,
    bmiCalc: function() {
        this.BMI = this.mass / (this.height * this.height)
    }
};

john.bmiCalc()
Mark.bmiCalc()

console.log(john);
console.log(Mark);

if (Mark.BMI > john.BMI) {
    console.log(Mark.fullName ," has the highest BMI of ", Mark.BMI)
} else if (john.BMI > Mark.BMI) {
    console.log(john.fullName ," has the highest BMI of ", john.BMI)
} else {
    console.log("They have the same BMI!")
}*/



/**************Coding Challenge 5 */

var john = {
    fullName: "john Smith",
    bills: [124, 48, 268,180, 42],
    calcTip: function() {
        this.tip = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            var tip;
            if (this.bills[i] < 50) {
                tip = 0.2 * this.bills[i];
            } else if (this.bills[i] > 50 && this.bills[i] < 200) {
                tip = 0.15 * this.bills[i];
            } else {
                tip = 0.1 * this.bills[i];
            }
            
            //Add results to the corresponding arrays
            this.tip[i] = tip;
            this.finalValues[i] = this.bills[i] + tip;
        }
    
    }
}


var mark = {
    fullName: "Mark Smith",
    bills: [77, 375, 110, 45],
    calcTip: function() {
        this.tip = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            var tip;
            if (this.bills[i] < 100) {
                tip = 0.2 * this.bills[i];
            } else if (this.bills[i] > 100 && this.bills[i] < 300) {
                tip = 0.1 * this.bills[i];
            } else {
                tip = 0.25 * this.bills[i];
            }
            
            //Add results to the corresponding arrays
            this.tip[i] = tip;
            this.finalValues[i] = this.bills[i] + tip;
        }
    
    }
}



function calcAve(tip) /*tip used here is just any var*/ {
    tipSum = 0;
    for(var i = 0; i < tip.length; i++) {
        tipSum += tip[i];
        tipAve = tipSum / tip.length;
    }
    return tipAve;
}

mark.calcTip();
john.calcTip();
mark.average = calcAve(mark.tip);
john.average = calcAve(john.tip);

console.log(mark);
console.log(john);







