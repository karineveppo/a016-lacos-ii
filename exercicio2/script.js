let numero = Number(prompt("Por favor digite um número:"))
let tabuada =[1,2,3,4,5,6,7,8,9,10]
 console.log("tabuada de:", numero)

 for(let i in tabuada){
    console.log(`${Number(i)+1} * ${numero} = ${numero * (Number(i)+1)}`)
 }
