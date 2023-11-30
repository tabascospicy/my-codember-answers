
import fetch from "node-fetch"


const words = await fetch("https://codember.dev/data/message_01.txt")


const response = await words.text()


const wordArray = response.split(" ")

const groupedWords = Object.entries(wordArray.reduce((acum,current,index)=>{
  if(!acum?.[current]){
    acum[current] = {
      count:1,
      index
    }

    return acum
  }
  acum[current].count++

  return acum
},{})).reduce((acum,current)=>{
  const [key,value] = current
  return `${acum}${key}${value.count}`
}, "")


console.log({groupedWords})