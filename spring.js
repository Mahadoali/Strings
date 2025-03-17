let a = "extravaganza"

console.log(a.slice(8,13));
const food = "The quick fox jumped over the lazy dog";
console.log( food.slice(0,4) + "eat" + food.slice(4))

const story = "The quick brown fox jumps over the lazy dog"
const story2 = "the"
const countThe = (story.match(/the/gi) || []).length;
console.log(countThe);

const countbrown =(story.match(/brown/gi) || [] ).length;
console.log(countbrown)


let string ="The pupils are reading in the library"
let word = "are"
console.log(string.includes(word));



let string2 ="The child was sitting on the table before it fell"
let word2 = "sitting"
console.log(string2.includes(word2))



const wond ="wonderfull"
const upperCase = wond.toUpperCase();
console.log(upperCase);


const amaz = "amazing"
const lowerCase = amaz.toLowerCase();
console.log(lowerCase)

const lowercase1 ="UndERneath"
const lowerCase1 = lowercase1.toLowerCase();
console.log(lowerCase1)

function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  console.log(convertToTitleCase('A wonderful world'));

  




