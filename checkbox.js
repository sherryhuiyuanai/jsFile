let checkbox = [ "A", "B", "C", "D", "E", "F", "G"];
for (let i = 0; i < 100; i++) {
    let result = [];
    for (let n = 0; n < checkbox.length; n++) {
        let temp = Math.floor(Math.random() * 2);
        result[n] = temp == 0 ? null : checkbox[n];
    }
    result = result.filter(x => x !== null);
    if (result[0] === null) {
        result[0] = checkbox[Math.floor(Math.random() * checkbox.length)];
    }
    console.log(`${i}  ${result.length}  [${result}]`);
}