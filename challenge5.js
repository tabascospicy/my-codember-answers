import fetch from "node-fetch"


const symbols = await fetch("https://codember.dev/data/database_attacked.txt")

const response = await symbols.text()

// divide the elements of the text by line break
const list = response.split("\n")

const checkValidUser = (user)=>{
  // user is an array with the following fields: id,username,email,age,location.
  const [id,username,email,age,location] = user
  // id must be alphanumeric,
  const alphaNumeric = /^[a-zA-Z0-9]+$/
  if(!alphaNumeric.test(id)){
    return false
  }
  // username must be alphanumeric,
  if(!alphaNumeric.test(username)){
    return false
  }
  // email must follow the email format, example: user@domain.com
  const emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  if(!emailFormat.test(email)){
    return false
  }
  // age is optional but if it is present must be a number
  if(age && isNaN(Number(age))){
    return false
  }
  // location is optional but if it is present must be a string
  if(location && typeof location !== "string"){
    return false
  }

  return true
}


const hiddenMessageList = list.reduce((acum,current)=>{
  // list are user fields separated by , in the order of id,username,email,age,location.
  const user = current.split(",")
  // check if the user is valid
  const isValid = checkValidUser(user)
  
  // if the user is valid, add it to the accumulator
  if(!isValid){
    const [_,username] = user
    // the hidden message is between the first letter of the username of each invalid user
    acum.push(username[0])
  }

  return acum

},[])

console.log(hiddenMessageList.join(""))