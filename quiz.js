const data = [
{
    id: 1,
    question: "Which is defined as species that accepts pair of electrons",

    options: [
    {option: "Lewis acid",iscorrect: true},
{option: "lewish base", iscorrect: false},
{option: "Bronsted-lowry acid", iscorrect: false},
{option: "Bronsted-lowry base", iscorrect: false},
    
],
},
{
    id: 2,
    question: "which is defined as species that donate proton?",
    options: [
    {option: "Lewis acid",iscorrect: false},
{option: " base", iscorrect: false},
{option: "Bronsted-lowry acid", iscorrect: true},
{option: "Bronsted-lowry base", iscorrect: false},
    
],
},  

{
    id: 3,
    question: "Which is defined as species that accepts proton",
 

    options: [
    {option: "Lewis acid",iscorrect: false},
{option: " good", iscorrect: false},
{option: "Bronsted-lowry acid", iscorrect: false},
{option: "Bronsted-lowry base", iscorrect: true},
    
],
},   
 
]
const maincontainer = document.querySelector(".main-container")
const questions = document.getElementById("questions")
// const first = document.getElementById("first")
// const second = document.getElementById("second")
// const third = document.getElementById("third")
// const fourth = document.getElementById("fourth")
const submit = document.getElementById("submitting")
const resultform = document.querySelector(".results")
const optioncontainer = document.querySelector(".options")
let value = 0;
let correctvalue = 0;
let wrongvalue = 0;
let inputvalue;




const changequestion = (chvalue)=> {
questions.innerText = data[chvalue].question
optioncontainer.innerHTML = data[chvalue].options.map((item, index)=> 
    `
    <div class="option">
    <label > <input name="option" type="radio"   id = ${index} value=${item.iscorrect}> ${item.option} </label>
</div>
`
 
).join(" ");

}
// first.innerText = data[chvalue].options[0].option;
// second.innerText = data[chvalue].options[1].option;
// third.innerText = data[chvalue].options[2].option;
// fourth.innerText = data[chvalue].options[3].option;

// document.querySelectorAll('input[name="option"]').forEach(input => input.checked = false);
    

changequestion(value)



submit.addEventListener("click", ()=> {



    if (inputvalue!=null) 
    {
        if (value < data.length-1) {
            value++;
            changequestion(value)
          inputvalue = null;
        }
    
else {
    maincontainer.style.display = "none";
    resultform.style.display = "block"; 

document.querySelector("#correct").innerText = `Correct Answer: ${correctvalue}`
document.querySelector("#wrong").innerText = `Wrong Answer: ${wrongvalue}`
document.querySelector("#score").innerText =  `Score: ${correctvalue*10}`

}

    }

    else {
        alert("please tick the option");
    }
  
   


});




optioncontainer.addEventListener("input", (e)=> {
   
    inputvalue = e.target.value == "true" ;
    if (inputvalue) {
        correctvalue++;
    
    }
    else {
    wrongvalue++;
    }
     })
    
     document.querySelector("#play").addEventListener("click",()=> {
 value = 0
        changequestion(value)
    
        correctvalue = 0
        wrongvalue = 0
inputvalue = null;

        maincontainer.style.display = "block";
        resultform.style.display = "none"; 
    
     })