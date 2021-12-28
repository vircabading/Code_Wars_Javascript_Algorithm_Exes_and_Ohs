/////////////////////////////////////////////////////
//  Code Wars: EXES AND OHS
/////////////////////////////////////////////////////

function XO(str) {
    let numX = 0;
    let numO = 0;

    // Convert String to all Lower Case
    let lcStr = str.toLowerCase();

    console.log("lower case string:", lcStr);

    // Iterate through the string to count numbers of X and O
    for (let idx=0; idx<str.length; idx++) {
        if (lcStr.charAt(idx) == 'x') {
            numX++;
        }
        if (lcStr.charAt(idx) == 'o') {
            numO++;
        }
    }

    console.log("num X: " + numX + " || num O: " + numO);
}

console.log("Test || XO('XOXOOX'):", XO('XOXOOX'));