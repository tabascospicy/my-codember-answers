
import fetch from "node-fetch"


const symbols = await fetch("https://codember.dev/data/encryption_policies.txt")

const response = await symbols.text()



// divide the elements of the text by line break
const list = response.split("\n")

const result = list.reduce((acum,current)=>{
    // separate the elements of the line, each element has 3 parts we need ${minNumber}-${maxNumber} ${letter}: ${password}
   const [range,letter,password] = current.split(" ")
    // separate the range by -
    const [min,max] = range.split("-")
    // count the number of times the letter appears in the password
    const count = password.split("").filter(x=>x===letter[0]).length
    const minNumber = Number(min)
    const maxNumber = Number(max) 
  //  console.log(count, letter[0], !(count>=min && count<=max))
    // check if the count is between the min and max
    if(!(count>=minNumber && count<=maxNumber)){
      
        // if it is, add 1 to the accumulator
        acum.push(password)

        return acum
    }

    return acum

},[])

console.log(result[12])