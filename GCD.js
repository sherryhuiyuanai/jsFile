// Version from Wendy
function GCD (a, b) {
    if (a < b) {
        let c = a
        a = b
        b = c
    } // Make sure a > b
    while(b != 0) {
        let temp = a
        a = b
        b = temp % b
    }
    return a
}
console.log(GCD(12921, 4234))



// Version from Sherry
function GCD2 (a, b) {
    let X = (a>b) ? a: b;
    let x = (X==a)? b: a;
    let r;
    while (r !== 0 ){
        r = X % x;
        temp = (r === 0)? temp: r;
        X = x;
        x = r;
    }
    return temp;
}
console.log(GCD2(12921, 4234));