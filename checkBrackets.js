/*
Mauro Lopez Jimenez
30/03/2020
*/

check = (code) => {
    let count = 0;
    let open = 0;
    let response = undefined;
  
    for (c in code){
        if (code[c] === '{' || code[c] === '}'){

            if (code[c] === '}') {
                if (open >= 1){
                    open -= 1;
                }
                count -= 1;
            }
  
            if (code[c] === '{'){
                count += 1;
                open +=1;
            }
        }
    }

    response = count % 2 === 0 && open == 0 ? true : false;
    return response;
 }

const trueCode = [
    "{ooo}{uuu}pp{lll}",
    "{{oo}uuu}",
    "{}{}",
    "{{{}}fff}",
    "{}{}uu{}",
    "{{{}}}"
]

const falseCode = [
    "{}{}{        ",
    "}{}{}",
    "{}{}oo{}{{{}}",
    "}}}{{{"
]

console.log("true code result: ")
trueCode.map(element => {
    console.log(element, " is " , check(element))
})
console.log("-------");
console.log("false code result: ")
falseCode.map(element => {
    console.log(element, " is " , check(element))
})


