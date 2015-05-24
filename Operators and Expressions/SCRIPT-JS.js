// Problems From Here \\

// Problem 1. Starts Here \\

function problemone() {
    var problem1Input = document.getElementById('problemone').value,
        isOdd = false;

    if (!isNaN(problem1Input) && problem1Input % 1 === 0 && problem1Input != '') {
        if (problem1Input % 2 === 0) {
            isOdd = false;
            document.getElementById('problemAnswerOne').innerHTML =
                problem1Input + ' is EVEN';
    
        } else { 
            isOdd = true;
            document.getElementById('problemAnswerOne').innerHTML =
                problem1Input + ' is ODD';
       }
    }
}

function problemtwo() {
    var problem2Input = document.getElementById('problemtwo').value,
    isDivisible7And5 = false;
    
    if (!isNaN(problem2Input) && problem2Input % 1 === 0 && problem2Input != '') {
        if (problem2Input % 5 === 0 && problem2Input % 7 === 0) {
            isDivisible7And5 = true;
            document.getElementById('problemAnswerTwo').innerHTML =
            problem2Input + ' is Divisible 7 And 5';

        } else {
            isDivisible7And5 = false;
            document.getElementById('problemAnswerTwo').innerHTML =
            problem2Input + ' is not Divisible 7 And 5';
        }
    }
}

function problemthree() {
    var width = document.getElementById('rect-width').value,
        height = document.getElementById('rect-height').value,
        area = width * height;

    if (!isNaN(width) && width >= 0 &&
        !isNaN(height) && height >= 0 &&
        width !== ''  && height !== '') {
        document.getElementById('problemAnswerThree').innerHTML =
            'The area is = ' + area;
    } else {
        document.getElementById('problemAnswerThree').innerHTML =
            'Width and height must not be negative numbers.';
    }
} 

function problemfour() {
    var problem4Input = document.getElementById('problemfour').value,
    thirdDigitIs7 = false;
    var modifedInput = Math.floor(Math.abs(problem4Input / 100));

    if (!isNaN(problem4Input) && problem4Input % 1 === 0 && problem4Input !== '') {
        if (modifedInput % 10 === 7) {
            thirdDigitIs7 = true;
        } else {
            thirdDigitIs7 = false;
        }    
            document.getElementById('problemAnswerFour').innerHTML =
            'Third digit of ' + problem4Input + ' is 7 ' + thirdDigitIs7;
    }
}

function problemfive() {
    var problem5Input = document.getElementById('problemfive').value;
    var binaryNumber = parseInt(problem5Input).toString(2).padLeft(16, '0');

    if (!isNaN(problem5Input) && problem5Input % 1 === 0 && problem5Input !== '') {
        var binaryNumber = problem5Input.toString,
            thirdBit = (problem5Input >> 3) & 1;
        document.getElementById('problemAnswerFive').innerHTML =
            problem5Input + ', binary representation: ' + binaryNumber + ', third bit: ' + thirdBit;
    } 
}

function problemsix() {
    var pointX = document.getElementById('point-x').value,
        pointY = document.getElementById('point-y').value,
        r = 5,
        withInCircle = ( pointX * pointX + pointY * pointY) <= r * r;

    if(!isNaN(pointX) && !isNaN(pointY) && pointX !== '' && pointY !== '') {
        document.getElementById('problemAnswerSix').innerHTML = 
            ' The point (' + pointX + ',' + pointY + ') is within the circle K(0, 5) = ' + withInCircle;
    }
}

function problemseven() {
    var problemInput7 = document.getElementById('problemseven').value;
    var isPrime = true;

    if(!isNaN(problemInput7) && problemInput7 % 1 === 0 && problemInput7 !== '') {
        problemInput7 *= 1;
        if(problemInput7 < 2) {
            isPrime = false;
        } else {
            for (var i = 2; i <= Math.floor(Math.sqrt(problemInput7)); i += 1) {
                if(problemInput7 % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        document.getElementById('problemAnswerSeven').innerHTML =
            problemInput7 + ' is prime? = ' + isPrime;
            isPrime = false;
    }
}

function problemeight() {
    var sideA = document.getElementById('side-a').value,
        sideB = document.getElementById('side-b').value,
        height = document.getElementById('height-h').value,
        area;

    if (!isNaN(sideA) && sideA >= 0 && sideA !== '' && !isNaN(sideB) && sideB >= 0 && sideB !== '' && !isNaN(height) && height >= 0 && height !== '') {
        area = (sideA * 1 + sideB * 1) * height / 2;
            document.getElementById('problemAnswerEight').innerHTML =
                ' The area is = ' + sideA + '+' + sideB + ')/2*' + height + '='  + area;
    } else {
        document.getElementById('problemAnswerEight').innerHTML =
            'Side A, side B and height must be non-negative numbers';
    }    
}

function problem9() {
    var coorX = document.getElementById('point-circle-x').value,
        coorY = document.getElementById('point-circle-y').value,
        r = 3,
        withinCircle = ((coorX - 1) * (coorX - 1) + (coorY - 1) * (coorY - 1)) <= r * r,
        outsideRect = ((coorX < -1) || (coorX > 5) || (coorY > 1) || (coorY < -1)),
        checkCondition = withinCircle && outsideRect;

    if (!isNaN(coorX) && !isNaN(coorY) && coorX !== '' && coorY !== '') {
        document.getElementById('problemAnswerNine').innerHTML =
            'The point (' + coorX + ',' + coorY +
            ') is within the circle K((1,1)), 3) and outside the given rectangle --> ' + checkCondition;
    }
}  