import React from 'react';
import MojiLine from "./MojiLine";
import {
    riseDripPushPull, and, xor, or, neg, add, addC, ter, leq, leqF, movDR,
    movDL,
    movU,
    movU2,
    clr,
    res
} from "./Logic";
import {compiler} from "./Compile"
import testCode from "./testCode";
import testLang from "./testLang";
import encode from "./Encode";


class Moji extends React.Component {
    constructor(props) {
        super(props);
        let j = "2";
        let loadedLang = testLang[j];
        let i = "4";
        let loadedWrap = testCode[i].wrap;
        let loadedX = testCode[i].xPos;
        let loadedY = testCode[i].yPos;
        let loadedCode = testCode[i].code;
        this.state = {
            useEncoding: 0,
            speed: 1,
            terminate: false,
            wrap: loadedWrap,
            xPos: loadedX,
            yPos: loadedY,
            display: [],
            blockCode: loadedCode,
            testLang: loadedLang
        }
        this.onChange = this.onChange.bind(this)
        this.advance = this.advance.bind(this)
        this.logic = this.logic.bind(this)
        this.compile = this.compile.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.encoder = this.encoder.bind(this)
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    encoder(event) {

    }


    compile(event) {
        let compiledCode = compiler(this.state.testLang)
        this.setState({
            blockCode: compiledCode,
            wrap: 22
        });
    }

    logic() {
        let xWrap = this.state.wrap;
        let x = this.state.xPos;
        let y = this.state.yPos;
        let code = this.state.blockCode;
        let currentBlock = code[y][x]
        let autoProgress = true;
        //riseDrip
        let update = riseDripPushPull(x, y, currentBlock, code, autoProgress)
        x = update.newX;
        y = update.newY;
        code = update.newCode;
        autoProgress = update.newAutoProgress;
        //control operations
        switch (currentBlock) {
            case "and":
                update = and(x, y, currentBlock, code, autoProgress)
                break;
            case "or":
                update = or(x, y, currentBlock, code, autoProgress)
                break;
            case "xor":
                update = xor(x, y, currentBlock, code, autoProgress)
                break;
            case "neg":
                update = neg(x, y, currentBlock, code, autoProgress)
                break;
            case "add":
                update = add(x, y, currentBlock, code, autoProgress)
                break;
            case "ter":
                update = ter(x, y, currentBlock, code, autoProgress, xWrap)
                break;
            case "addC":
                update = addC(x, y, currentBlock, code, autoProgress)
                break;
            case "leq":
                update = leq(x, y, currentBlock, code, autoProgress)
                break;
            case "leqF":
                update = leqF(x, y, currentBlock, code, autoProgress)
                break;
            case "R":
                update = movDR(x, y, currentBlock, code, autoProgress)
                break;
            case "V":
                update = movDL(x, y, currentBlock, code, autoProgress)
                break;
            case "J":
                update = movU(x, y, currentBlock, code, autoProgress)
                break;
            case "K":
                update = movU2(x, y, currentBlock, code, autoProgress)
                break;
            case "Z":
                update = clr(x, y, currentBlock, code, autoProgress)
                break;
            case "^":
                update = res(x, y, currentBlock, code, autoProgress)
                break;
            default:
                break;
        }
        x = update.newX;
        y = update.newY;
        code = update.newCode;
        autoProgress = update.newAutoProgress;

        if (currentBlock === "a") {
            code[y][x] = "b"
        }

        if (currentBlock === "b") {
            code[y][x] = "A"
        }

        if (currentBlock === "A") {
            code[y][x] = "b"
        }
        //Termination
        let terminationStatus = false;
        if (autoProgress) {
            if (!(currentBlock === "X")) {
                if (x + 2 >= xWrap) {
                    y = y + 1;
                    if (x % 2 === 0) {
                        x = 1;
                    } else {
                        x = 0;
                    }
                } else {
                    x = x + 2
                }
            }
        } else {
            terminationStatus = true;
        }
        let displayUpdate = [];
        if (this.state.useEncoding === 1) {
            let xMod3 = this.state.xPos % 3;
            let yMod3 = this.state.yPos % 3;
            let index = (xMod3 + yMod3) % 3;
            let newLine = [];
            var i;
            var j;
            for (i = 0; i < code.length; i++) {
                newLine = [];
                for (j = 0; j < code[i].length; j++) {
                    console.log("WO");
                    if (encode[code[i][j]] === undefined) {
                        newLine.push(code[i][j])
                    } else {
                        newLine.push(encode[code[i][j]][index]);
                    }
                }
                displayUpdate.push(newLine)
            }
            displayUpdate[this.state.yPos][this.state.xPos] = "😡";
        }
        this.setState({
            xPos: x,
            yPos: y,
            terminate: terminationStatus,
            blocKCode: code,
            display: displayUpdate
        });
        //this.state.blockCode[y_pos][x_pos]
    }

    advance(event) {
        if (!this.props.terminate) {
            this.logic()
            setTimeout(() => {
                this.advance()
            }, this.state.speed)
        }
    }

    nextStep(event) {
        this.logic();
        //this.setState({[event.target.name]: event.target.value});
    }

    render() {
        let bc = [];
        if (this.state.useEncoding === 1) {
            bc = this.state.display;
        } else {
            bc = this.state.blockCode;
        }

        let lineList = bc.map((blockLine, index) => {
            return (
                <div className="board-row"><MojiLine y={index} line={blockLine}/></div>
            )
        })
        return (<div>
                <div>
                    <button
                        onClick={() =>
                            this.advance()}>
                        Advance
                    </button>
                    <button
                        onClick={() =>
                            this.nextStep()}>
                        Next
                    </button>
                    <button
                        onClick={() =>
                            this.compile()}>
                        Compile
                    </button>
                </div>
                <ul>{lineList}</ul>
            </div>

        )
    }
}

export default Moji;