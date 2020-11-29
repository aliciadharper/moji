function res(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    x=1;
    y=0;
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function clr(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    code[y][x-1] = "a";
    code[y][x+1] = "a";
    code[y-1][x] = "a";
    code[y+1][x] = "a";
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function movU2(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (code[y + 1][x] === "T") {
        code[y + 1][x] = "a"
        y = y - 2;
        autoProgress = false;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function movU(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (code[y][x - 1] === "a"||code[y][x - 1] === "A") {
        code[y][x - 1] = "T"
        code[y - 1][x] = "T"
        y = y - 2;
        autoProgress = false;
    } else {
        code[y][x - 1] = "a"
        code[y - 1][x] = "a"
        autoProgress = true;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function movDR(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (code[y][x + 1] === "a" ||code[y][x + 1] === "A") {
        code[y][x + 1] = "T"
        y = y + 1;
        x = x + 1;
        autoProgress = false;
    } else {
        code[y][x + 1] = "a"
        autoProgress = true;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function movDL(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (code[y][x - 1] === "a" || code[y][x - 1] === "A") {
        code[y][x - 1] = "T"
        y = y + 1;
        x = x - 1;
        autoProgress = false;
    } else {
        code[y][x - 1] = "a"
        autoProgress = true;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function ter(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if ((x1 + 2 >= wrap1) || code[y][x + 2] != "ter") {
        y = y + 2;
        autoProgress = false;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function leqF(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    let previous = code[y][x + 1];
    let above = parseInt(code[y - 1][x]);
    let below = parseInt(code[y + 1][x]);

    if (previous === "T" || previous === "F") {
        code[y][x + 1] = "a";
        code[y + 3][x] = previous;
        autoProgress = false;
        x = x - 1;
        y = y + 1;
    } else {
        autoProgress = false;
        if (above <= below) {
            code[y + 3][x] = "T";
        } else {
            code[y + 3][x] = "F";
        }
        x = x - 1;
        y = y + 1;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function leq(x1, y1, currentBlock1, code1, autoProgress1, wrap1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    let previous = code[y][x + 1];
    let above = parseInt(code[y - 1][x]);
    let below = parseInt(code[y + 1][x]);
    if (previous === "T" || previous === "F") {
        code[y][x - 1] = previous;
        code[y][x + 1] = "a";
    } else {
        if (above < below) {
            code[y][x - 1] = "T";
        } else {
            if (above > below) {
                code[y][x - 1] = "F";
            } else {
                code[y][x - 1] = "a";
            }
        }
    }
    autoProgress = false;
    x = x - 2;
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function add(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    let outputPre = parseInt(code[y - 1][x]) + parseInt(code[y + 1][x]);
    let output = outputPre  % 4;
    code[y + 3][x] = "" + output;
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function addC(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }

    let oldCarry = code[y][x - 1];
    if (oldCarry === "1") {
        oldCarry = 1
    } else {
        oldCarry = 0
    }
    let newCarry = 0;
    let output = parseInt(code[y - 1][x]) + parseInt(code[y + 1][x]) + oldCarry;
    if (output >= 4) {
        newCarry = 1
    }
    let modOutput = output % 4;
    code[y + 3][x] = "" + modOutput;
    code[y][x + 1] = "" + newCarry;
    code[y][x - 1] = "a";
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function and(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (currentBlock === "and") {
        let output = parseInt(code[y - 1][x]) * parseInt(code[y + 1][x]);
        code[y + 3][x] = "" + output;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function neg(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (currentBlock === "neg") {
        let output = 1 - parseInt(code[y - 1][x]);
        code[y + 1][x] = "" + output;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function xor(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (currentBlock === "xor") {
        let output = parseInt(code[y - 1][x]) * parseInt(code[y + 1][x]);
        code[y + 3][x] = "" + output;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}


function or(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    if (currentBlock === "or") {
        let output = 1 - (1 - parseInt(code[y - 1][x])) * (1 - parseInt(code[y + 1][x]));
        code[y + 3][x] = "" + output;
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

function riseDripPushPull(x1, y1, currentBlock1, code1, autoProgress1) {
    let x = x1;
    let y = y1;
    let currentBlock = currentBlock1;
    let code = code1;
    let autoProgress = autoProgress1;
    let update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    let leadChar = currentBlock.charAt(0);
    if (leadChar === "d" || leadChar === "r" || leadChar === "p" || leadChar === "q") {
        let indexInt = parseInt(currentBlock.charAt(1));
        //We set up the priors
        let maxPrior = code[y - 1][x - 2];
        let maxPriorChar = maxPrior.charAt(0)
        let subPrior = code[y + 1][x - 2];
        let subPriorChar = subPrior.charAt(0)
        let prior = code[y][x - 1];
        let c1 = maxPriorChar === "a" && subPriorChar === "a";
        let c2 = maxPriorChar === "a" && subPriorChar === "A";
        let c3 = maxPriorChar === "A" && subPriorChar === "a";
        let c4 = maxPriorChar === "A" && subPriorChar === "A";
        if (c1 || c2 || c3 || c4) {
            switch (leadChar) {
                case "p":
                    if (indexInt === 0) {
                        //Do not push in the "p0" case
                        autoProgress = true;
                    } else {
                        code[y + 1][x - 2] = "L";
                        let newIndexInt = indexInt - 1;
                        code[y - 1][x - 2] = "p" + newIndexInt;
                        y = y - 2
                        autoProgress = false;
                    }
                    break;
                case "q":
                    if (indexInt === 0) {
                        //Do not push in the "p0" case
                        autoProgress = true;
                    } else {
                        code[y - 1][x - 2] = "M";
                        let newIndexInt = indexInt - 1;
                        code[y + 1][x - 2] = "q" + newIndexInt;
                        y = y + 2
                        autoProgress = false;
                    }
                    break;
                case "d":
                    if (indexInt === 0) {
                        //Do not drip in the "d0" case
                        autoProgress = true;
                    } else {
                        code[y - 1][x - 2] = "S";
                        let newindexInt = indexInt - 1;
                        code[y + 1][x - 2] = "d" + newindexInt;
                        code[y + 1][x] = prior;
                        y = y + 2
                        autoProgress = false;
                    }
                    break;
                case "r":
                    if (indexInt === 0) {
                        //Do not drip in the "d0" case
                        autoProgress = true;
                    } else {
                        code[y + 1][x - 2] = "H";
                        let newindexInt = indexInt - 1;
                        code[y - 1][x - 2] = "r" + newindexInt;
                        code[y - 1][x] = prior;
                        y = y - 2
                        autoProgress = false;
                    }
                    break;

            }
        }
        let status = "e";
        if (maxPriorChar === "d" || maxPriorChar === "q" || maxPriorChar === "S" || maxPriorChar === "T" || maxPriorChar === "N" || maxPriorChar === "M") {
            status = maxPriorChar
        }
        if (subPriorChar === "r" || subPriorChar === "p" || subPriorChar === "C" || subPriorChar === "W" || subPriorChar === "L" || subPriorChar === "H") {
            status = subPriorChar
        }
        switch (status) {
            case "p":
                let newIndexIntPrior4 = parseInt(subPrior.charAt(1));
                if (newIndexIntPrior4 > 0) {
                    code[y + 1][x - 2] = "W";
                    let newIndexInt4 = newIndexIntPrior4 - 1;
                    code[y - 1][x - 2] = "p" + newIndexInt4;
                    y = y - 2
                    autoProgress = false;
                } else {
                    code[y + 1][x] = code[y][x - 1];
                    code[y + 1][x - 2] = "W";
                    y = y + 2
                    autoProgress = false;
                }
                break;
            case "q":
                let newIndexIntPrior = parseInt(maxPrior.charAt(1));
                if (newIndexIntPrior > 0) {
                    code[y - 1][x - 2] = "N";
                    let newIndexInt = newIndexIntPrior - 1;
                    code[y + 1][x - 2] = "q" + newIndexInt;
                    y = y + 2
                    autoProgress = false;
                } else {
                    code[y - 1][x] = code[y][x - 1];
                    code[y - 1][x - 2] = "N";
                    y = y - 2
                    autoProgress = false;
                }
                break;
            case "d":
                let indexIntPrior = parseInt(maxPrior.charAt(1));
                if (indexIntPrior > 0) {
                    code[y - 1][x - 2] = "T";
                    let newindexInt = indexIntPrior - 1;
                    code[y + 1][x - 2] = "d" + newindexInt;
                    code[y + 1][x] = code[y - 1][x];
                    y = y + 2
                    autoProgress = false;
                } else {
                    code[y - 1][x - 2] = "T";
                    code[y][x - 1] = code[y - 1][x];
                    y = y - 2
                    autoProgress = false;
                }
                break;
            case "r":
                let dripRisePrior = parseInt(subPrior.charAt(1));
                if (dripRisePrior > 0) {
                    code[y + 1][x - 2] = "C";
                    let newindexInt = dripRisePrior - 1;
                    code[y - 1][x - 2] = "r" + newindexInt;
                    code[y - 1][x] = code[y + 1][x];
                    y = y - 2
                    autoProgress = false;
                } else {
                    code[y + 1][x - 2] = "C";
                    code[y][x - 1] = code[y + 1][x];
                    y = y + 2
                    autoProgress = false;
                }
                break;
            case "N":
                code[y - 1][x] = code[y + 1][x];
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y + 1][x] = "a";
                y = y - 2;
                autoProgress = false;
                break;
            case "M":
                code[y][x - 1] = code[y + 1][x];
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                code[y + 1][x] = "a";
                autoProgress = true;
                break;
            case "W":
                code[y + 1][x] = code[y - 1][x];
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                y = y + 2;
                autoProgress = false;
                break;
            case "L":
                code[y][x - 1] = code[y - 1][x];
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                code[y + 1][x] = "a";
                autoProgress = true;
                break;
            case "T":
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                code[y + 1][x] = "a";
                y = y - 2;
                autoProgress = false;
                break;
            case "S":
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                code[y + 1][x] = "a";
                autoProgress = true;
                break;
            case "C":
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                code[y + 1][x] = "a";
                y = y + 2;
                autoProgress = false;
                break;
            case "H":
                code[y - 1][x - 2] = "a";
                code[y + 1][x - 2] = "a";
                code[y - 1][x] = "a";
                code[y + 1][x] = "a";
                autoProgress = true;
                break;
            default:
            //text = "I have never heard of that fruit...";
        }
    }
    update = {
        newX: x,
        newY: y,
        newCode: code,
        newAutoProgress: autoProgress
    }
    return update
}

export {
    riseDripPushPull,
    and,
    xor,
    or,
    neg,
    add,
    addC,
    ter,
    leq,
    leqF,
    movDR,
    movDL,
    movU,
    movU2,
    clr,
    res
}