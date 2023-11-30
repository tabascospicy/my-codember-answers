
import fetch from "node-fetch"


const symbols = await fetch("https://codember.dev/data/message_02.txt")

const response = await symbols.text()


const operate = (letter,value)=>{
  switch(letter){
    case "#": return value + 1
    case "&": {
      console.log(value)
      return value
    }
    case "@": return value - 1
    case "*": return value * value
  }
}


const compileWeirdThing = (code) =>{
   let value =0 
    for(let i = 0; i < code.length; i++){
      const valueCopy = value
      value = operate(code[i],valueCopy)
    }
}


compileWeirdThing(response)



