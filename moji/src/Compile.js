function prePipeHandler(prePipe, line, pipe, parity) {
    let newLine = []
    if (pipe.piped === false) {
        var i;
        for (i = 0; i < prePipe; i++) {
            newLine.push("a")
        }
    } else {
        for (i = 0; i < pipe.pre.length; i++) {
            if (parity === 1) {
                newLine.push(pipe.pre[i]);
                newLine.push("a");
            } else {
                newLine.push("a");
                newLine.push(pipe.pre[i]);
            }
        }
        for (i = 0; i < prePipe - 2 * pipe.pre.length; i++) {
            newLine.push("a")
        }
    }
    return newLine
}

function postPipeHandler(postPipe, line, pipe, parity) {
    var i;
    if (pipe.piped === false) {
        for (i = 0; i < postPipe; i++) {
            line.push("a")
        }
    } else {
        for (i = 0; i < postPipe - 2; i++) {
            line.push("a")
        }
        line.push("a");
        line.push(pipe.post);
    }
    return line
}

function instructionHandler(instruction, prePipe, postPipe, mem, wrap) {
    let instructionCode = instruction[0];
    let newLine = [];
    var i;
    let instructionData = instruction[1];
    let pipe = instruction[1].pipe;
    let parity = instruction[1].parity;
    let flooredIndex = 0;
    switch (instructionCode) {
        case "x":
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            for (i = 0; i < mem; i = i + 2) {
                newLine.push("X")
                newLine.push("X")
            }
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
        case "^":
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            for (i = 0; i < mem; i = i + 2) {
                newLine.push("^")
                newLine.push("^")
            }
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
        case "null":
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            for (i = 0; i < mem; i = i + 2) {
                if (parity === 1) {
                    newLine.push("b")
                    newLine.push("a")
                } else {
                    newLine.push("a")
                    newLine.push("d0")
                }
            }
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
        case "var":
            instructionData = instruction[1];
            flooredIndex = 0;
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            for (i = 0; i < mem; i = i + 2) {
                if (instructionData.init === 1) {
                    flooredIndex = Math.floor(i / 2);
                    newLine.push("" + instructionData.input[flooredIndex]);
                } else {
                    newLine.push("a")
                }
                newLine.push(instructionData.flag + instructionData.nextRef)
            }
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
        case "ter":
            instructionData = instruction[1];
            flooredIndex = 0;
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            for (i = 0; i < mem; i = i + 2) {
                newLine.push("ter");
                newLine.push("a")
            }
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
        case "<":
            instructionData = instruction[1];
            flooredIndex = 0;
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            newLine.push("leqF");
            newLine.push("a")
            for (i = 0; i < mem - 2; i = i + 2) {
                newLine.push("leq");
                newLine.push("a")
            }
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
        case "+":
            instructionData = instruction[1];
            flooredIndex = 0;
            newLine = prePipeHandler(prePipe, newLine, pipe, parity);
            for (i = 0; i < mem - 2; i = i + 2) {
                newLine.push("addC");
                newLine.push("a")
            }
            newLine.push("add");
            newLine.push("a")
            newLine = postPipeHandler(postPipe, newLine, pipe, parity);
            break;
    }
    return newLine
}

function rdProcessing(lang) {
    //Build Lang
    let langLength = lang.length;
    var i;
    var j;
    for (i = 0; i < langLength; i++) {
        if (lang[i][0] === "var" && lang[i][1].init === 1) {
            for (j = i + 1; j < langLength; j++) {
                if (lang[j][1].init === 0) {
                    if (lang[j][0] === "var" && lang[j][1].label === lang[i][1].label) {
                        lang[j][1].nextRef = Math.floor((j - i) / 2);
                    }
                }
            }
        }
    }
    return lang
}

function compiler(langPackage) {
    //We initiate the relevant variables
    let wrap = langPackage.wrap;
    let head = langPackage.head;
    let prePipe = langPackage.prePipe;
    let postPipe = langPackage.postPipe;
    let mem = langPackage.mem;
    let lang = langPackage.lang;
    let compiledCode = [];
    let newLine = [];
    //Rise/drop processing
    lang = rdProcessing(lang);
    console.log(lang);
    //Build Head
    var i;
    var j;
    for (i = 0; i < head; i++) {
        newLine = [];
        for (j = 0; j < wrap; j++) {
            newLine.push("a")
        }
        compiledCode.push(newLine)
    }
    //Build Lang
    let langLength = lang.length;
    for (i = 0; i < langLength; i++) {
        newLine = instructionHandler(lang[i], prePipe, postPipe, mem, wrap)
        compiledCode.push(newLine)
    }
    console.log(compiledCode);
    return compiledCode;
}

export {
    compiler
}