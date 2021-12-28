/////////////////////////////////////////////////////
//  Code Wars: EXES AND OHS
/////////////////////////////////////////////////////

function XO(str) {
    let numX = 0;
    let numO = 0;

    // Convert String to all Lower Case
    let lcStr = str.toLowerCase();

    // Iterate through the string to count numbers of X and O
    for (let idx=0; idx<str.length; idx++) {
        if (lcStr.charAt(idx) == 'x') {
            numX++;
        }
        if (lcStr.charAt(idx) == 'o') {
            numO++;
        }
    }

    // Return true if the number of X and O are the same
    if (numO === numX) {
        return true;
    }
    return false;
}

console.log("Test || XO('XOXOOX'):", XO('XOXOOX'));