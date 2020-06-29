function average(grades) {
    let result = 0;
    for(i = 0; i<grades.length;i++) {
        result +=grades[i];
    }
    result=Math.round(result/grades.length);
    return result;
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(`The average for the Accounting grades provided is ${average(scores)}%`);

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(`The average for the Maths grades provided is ${average(scores2)}%`);
