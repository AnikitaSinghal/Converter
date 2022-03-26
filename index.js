const Select1=document.getElementById("select1");
const Select2=document.getElementById("select2");

const InputElement1=document.getElementById("input1");
const InputElement2=document.getElementById("input2");
const OutputElement=document.getElementById("footer1");

const convertbtn=document.getElementById("btn1");
const swapbtn=document.getElementById("btn2");

convertbtn.addEventListener("click",(e)=>{
    "use strict";
    e.preventDefault();
    function Output(){
        OutputElement.innerText="From"+' ' +Select1.value +' ' + "To" +' ' + Select2.value +' ' + "is" +' ' + InputElement2.value +' ' + "."
    }
    let number = parseInt(InputElement1.value);
        if(Select1.value == Select2.value){
              alert("Both are same Selection Please choose a different selection");
        }
        else if(!InputElement1.value){
            alert("Input is Unavailable");
        }
        
        //Decimal---->Hexadecimal
        else if(Select1.value=="dec"&&Select2.value=="hex"){
            InputElement2.value =  number.toString(16)
            InputElement2.style.color="green";
            Output();
        }
        //Decimal---->Octal
        else if(Select1.value=="dec"&&Select2.value=="oct"){
            InputElement2.value =   number.toString(8);
            InputElement2.style.color="red";
            Output();
        }
        //Decimal---->Binary
        else if(Select1.value=="dec"&&Select2.value=="bin"){
            InputElement2.value =  number.toString(2);
            InputElement2.style.color="purple";
            Output();
        }

        //Hexadecimal---->Decimal
        else if(Select1.value=="hex"&&Select2.value=="dec"){
            InputElement2.ivalue =  parseInt(number,16);
            InputElement2.style.color = "green";
            Output();
        }
        //Hexadecimal---->Octal
        else if(Select1.value=="hex"&&Select2.value=="oct"){
            InputElement2.value = parseInt(number,16).toString(8);
            InputElement2.style.color = "red";
            Output();
        }
        //Hexadecimal---->Binary
        else if(Select1.value=="hex"&&Select2.value=="bin"){
            InputElement2.value = (parseInt(number, 16).toString(2)).padStart(8, '0');
            InputElement2.style.color = "purple";
            Output();
        }

        //Octal---->Decimal
        else if(Select1.value=="oct"&&Select2.value=="dec"){
            InputElement2.value =  parseInt(number,8).toString(10);
            InputElement2.style.color = "green";
            Output();
        }
        //Octal---->Hexadecimal
        else if(Select1.value=="oct"&&Select2.value=="hex"){
            InputElement2.value = parseInt(number,8).toString(16);
            InputElement2.style.color = "RED";
            Output();
        }
        //Octal---->Binary
        else if(Select1.value=="oct"&&Select2.value=="bin"){
            InputElement2.value =  parseInt(number,8).toString(2);
            InputElement2.style.color = "purple";
            Output();
        }

        //Binary---->Decimal
        else if(Select1.value=="bin"&&Select2.value=="dec"){
            InputElement2.value = parseInt(number,2).toString(10);
            InputElement2.style.color = "green";
            Output();
        }
        //Binary---->Hexadecimal
        else if(Select1.value=="bin"&&Select2.value=="hex"){
            InputElement2.value =  parseInt(number,2).toString(16);
            InputElement2.style.color = "red";
            Output();
        }
        //Binary---->Octal
        else if(Select1.value=="bin"&&Select2.value=="oct"){
            InputElement2.value = parseInt(number,2).toString(8);
            InputElement2.style.color = "purple";
            Output();
        }
    })
swapbtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(Select1.value == Select2.value){
        alert("Both are same Selection Please choose a different selection");
    }
    else if(!InputElement1.value){
        alert("Input is Unavailable");
    }
    let a = Select1.value;
    let b = Select2.value;
    let c=InputElement1.value;
    let d=InputElement2.value;
    Select1.value = b;
    Select2.value = a;
    InputElement1.value=d;
    InputElement2.value=c;
    OutputElement.innerText="From"+' ' +b +' ' + "To" +' ' + a +' ' + "is" +' ' + c +' ' + "."
})