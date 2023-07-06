let ans = genrandnum();
//gendrandnum = generate random number
let attempts = 0;

//function to generate random number
function genrandnum() {
    return Math.floor(Math.random()*100)+1;
}

//function to test user number and display results
function confirm() {
    var usernum = parseInt(document.getElementById("userinput").value);
    attempts++;
    if(usernum<1 || usernum>100){
        alert("Enter a number between 1 and 100");
    }
    
    else if(usernum === ans) {
    document.getElementById("rbox").style.display="block"; 
    document.getElementById("gboxcov").style.display="none"; 
    document.getElementById("totalatt").innerHTML=`Total attempts: ${attempts}`;
    document.getElementById("anspara").innerHTML=`You guessed the number Correctly (${ans}).`;
    }
    else if(usernum<ans){
    document.getElementById("hilotxt").style.animation='none';
   setTimeout(()=>{ document.getElementById("hilotxt").style.animation='pop 0.3s ease-out';
 document.getElementById("hilotxt").innerText="Too Low, try again";  
        document.getElementById("hilotxt").style.color="red";
        document.getElementById("hilotxt").style.backgroundColor="#ff000a20";},50)
        document.getElementById("guesscount").innerText=`No. Of Guesses: ${attempts}`;
     document.getElementById("hilotxt").style.display = "block";
    }
    else{
   document.getElementById("hilotxt").style.animation='none';
    setTimeout(()=>{ document.getElementById("hilotxt").style.animation='pop 0.5s forwards';
       
       document.getElementById("hilotxt").innerText="Too High, try again";
        document.getElementById("hilotxt").style.color="red";
        document.getElementById("hilotxt").style.backgroundColor="#ff000a20";},50)
        document.getElementById("guesscount").innerText=`No. Of Guesses: ${attempts}`;
    }
}

//function to restart game
function playagain() {
   document.getElementById("hilotxt").innerText="...";
    document.getElementById("hilotxt").style.color="black";
    document.getElementById("guesscount").innerText=`No. Of Guesses:`;
    document.getElementById("gboxcov").style.display="block"; 
    document.getElementById("rbox").style.display="none"; 
    document.getElementById("hilotxt").style.backgroundColor="white";
    document.getElementById("userinput").value="";
    ans = genrandnum();
    attempts = 0;
    
}
