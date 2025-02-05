let obj={
    name : "guvi",
    age : 10
}
let jsonobj={
   " name" : "guvi",
    "age" : 10
}
console.log("888888888888888")
console.log(jsonobj)
console.log("_______________")
let jsonString = JSON.stringify(obj)
console.log(jsonString)
console.log(jsonString.name)
console.log("________________")
let jsonmethodparse = JSON.parse(jsonString)
console.log(jsonmethodparse)
console.log(jsonmethodparse.name)
