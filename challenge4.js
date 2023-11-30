import fetch from "node-fetch"


const symbols = await fetch("https://codember.dev/data/files_quarantine.txt")

const response = await symbols.text()

// divide the elements of the text by line break
const list = response.split("\n")

// files are names separated by (-) the first part is an alphanumeric string and the second part is a combination of letters that must appear just one time in the first one
// if the letters of the second part appears more than one time in the first part, the file is not valid
const realFiles = list.reduce((acum,current)=>{
    // separate the elements of the line, each element has 3 parts we need ${minNumber}-${maxNumber} ${letter}: ${password}
   const [name,letters] = current.split("-")
   const lettersList = letters.split("")
   lettersList.forEach((letter)=>{
    const count = name.split("").filter(x=>x===letter).length

    // if just one letter appears more than one time, the file is not valid
    if(count>1){
      // the return is to avoid add the file to the accumulator and continue with the next one
       return acum
    }
   })
   
   // if we reach this point the file is valid, so we add it to the accumulator
  acum.push(letters)
   

   return acum
},[])

console.log(realFiles[32])