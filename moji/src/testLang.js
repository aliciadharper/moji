const testLang = {
    "1": {
        wrap: 22,
        head: 4,
        prePipe: 6,
        mem: 12,
        postPipe: 4,
        lang: [
            ["var", {parity:0, init: 1, label: "cat",pipe:{piped: false, pre:null,post:null}, flag: "d", nextRef: 0, input: [1, 1, 1, 1, 1, 3]}],
            ["null", {parity:1, init: 0, label: "", pipe:{piped: false,  pre:null,post:null}, input: {}}],
            ["var", {parity:0,init: 1, label: "dog",pipe:{piped: false, pre:null,post:null},  flag: "d", nextRef: 0, input: [1, 2, 1, 3, 1, 3]}],
            ["null", {parity:1,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 1, label: "parrot",pipe:{piped: false, pre:null,post:null}, flag: "d", nextRef: 0, input: [3, 3, 3, 7, 7, 7]}],
            ["null", {parity:1,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 0, label: "cat",pipe:{piped: false, pre:null,post:null}, flag: "p", nextRef: 0, input: []}],
            ["ter", {parity:1, init: 0, label: "", pipe: {piped: true, pre:["R","a"],post: "a"}, input: {}}],
            ["var", {parity:0, init: 1, label: "harry",pipe: {piped: true, pre:["a","a"],post:"K"}, flag: "d", nextRef: 0, input: [9, 8, 7, 6, 5, 4]}],
            ["<", {parity:1, init: 0, label: "",  pipe: {piped: true, pre:["R","a"],post:"a"}, input: {}}],
            ["var", {parity:0, init: 0, label: "cat",pipe: {piped: true,  pre:["Z","a"],post:"J"}, flag: "p", nextRef: 0, input: []}],
            ["null", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 0, label: "cat", flag: "r",pipe:{piped: false, pre:null,post:null}, nextRef: 0, input: [1, 2, 1, 3, 1, 3]}],
            ["null", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 1, label: "dog4", flag: "d",pipe:{piped: false, pre:null,post:null}, nextRef: 0, input: [1, 2, 1, 3, 1, 3]}],
            ["null", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["null", {parity:0, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["x", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}]
        ]
    },
    "2": {
        wrap: 22,
        head: 4,
        prePipe: 6,
        mem: 12,
        postPipe: 4,
        lang: [
            ["var", {parity:0, init: 1, label: "x",pipe:{piped: false, pre:null,post:null}, flag: "d", nextRef: 0, input: [0, 0, 0, 0, 0, 0]}],
            ["null", {parity:1,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 1, label: "y",pipe:{piped: false, pre:null,post:null}, flag: "d", nextRef: 0, input: [1, 0, 0, 0, 0, 0]}],
            ["null", {parity:1,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 1, label: "N",pipe:{piped: false, pre:null,post:null}, flag: "d", nextRef: 0, input: [1, 1, 0, 0, 0, 0]}],
            ["null", {parity:1,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["null", {parity:0,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["null", {parity:1,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 0, label: "x",pipe: {piped: false,  pre:null,post:null}, flag: "p", nextRef: 0, input: []}],
            ["+", {parity:1, init: 0, label: "",  pipe: {piped: true, pre:["R","a"],post:"a"}, input: {}}],
            ["var", {parity:0, init: 0, label: "y",pipe: {piped: true,  pre:["a","a"],post:"J"}, flag: "p", nextRef: 0, input: []}],
            ["null", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["var", {parity:0, init: 0, label: "x", flag: "r",pipe:{piped: false, pre:null,post:null}, nextRef: 0, input: []}],
            ["ter", {parity:1, init: 0, label: "", pipe: {piped: true, pre:["R","a"],post: "a"}, input: {}}],
            ["var", {parity:0, init: 0, label: "x",pipe: {piped: true, pre:["a","a"],post:"K"}, flag: "p", nextRef: 0, input: []}],
            ["<", {parity:1, init: 0, label: "",  pipe: {piped: true, pre:["R","a"],post:"a"}, input: {}}],
            ["var", {parity:0, init: 0, label: "N",pipe: {piped: true,  pre:["Z","a"],post:"J"}, flag: "p", nextRef: 0, input: []}],
            ["null", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["null", {parity:0,init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["null", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["null", {parity:0, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}],
            ["^", {parity:1, init: 0, label: "",pipe:{piped: false, pre:null,post:null}, input: {}}]]

    }
}
//
// ["var", {init: 0, label:"cat", input:[1,1,1,1,1,1]}],
// ["null", {init: 0, label:"", input:{}}],
// ["var", {init: 1, label:"cat", input:{}}]
// ,
//             ["null",2],
//             ["var",2],
//             ["null",2],
//             ["ter", 2],
//             ["var", 2],
//             ["<",   2],
//             ["var", 2],
//             ["a",   2],
//             ["a",   2],
//             ["x",   2],

export default testLang;