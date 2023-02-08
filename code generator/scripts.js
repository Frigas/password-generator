const empty = "";
const uCase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&^-";


const plength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click",() => {
    let initalPassword =empty;

(upperCase.checked) ? initalPassword += uCase : "";
(lowerCase.checked) ? initalPassword += lCase : "";
(pNumber.checked) ? initalPassword += pNumber : "";
(Symbol.checked) ? initalPassword += Symbol : "";

password.value = generatePassword(plength.value,
    initalPassword)
});
function generatePassword(L,initalPassword){
    let pass = "";
    
    
    for (let i = 0; i < L; i++)
    {pass += initalPassword.charAt(Math.floor(Math.random() * initalPassword.length));
    }
    return pass;
}
alert(hello)

