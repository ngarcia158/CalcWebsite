function answer1(){
    if(document.getElementById("1").value === "-2.11819" || document.getElementById("1").value === "-2.1182"){
        document.getElementById("output").innerHTML = "Correct<br/> <img src='answer1.jpg' width='40%' height='40%'/>" 
    }
    else[
        document.getElementById("output").innerHTML = "Incorrect <button name='submit' type='button' onclick='hint()' id='1'>answer</button>"
    ]
}
function hint(){
    document.getElementById("output").innerHTML = "<img src='answer1.jpg' width='40%' height='40%'/>"
}
function hint2(){
    document.getElementById("output").innerHTML = "<img src='answer2.jpg' width='40%' height='40%'/>"
}
function answer2(){
    if(document.getElementById("2").value === "-1.7602"){
        document.getElementById("output").innerHTML = "Correct<br/> <img src='answer2.jpg' width='40%' height='40%' />" 
    }
    else[
        document.getElementById("output").innerHTML = "Incorrect <button name='submit' type='button' onclick='hint2()' id='2'>answer</button>"
    ]
}

function answer3(){
    if(document.getElementById("3").value !== ""){
        document.getElementById("output").innerHTML = "Compare<br/> <img src='answer3.png' id='3' width='40%' height='40%'/>" 
    }

}
function answer4(){
    if(document.getElementById("4").value !== ""){
        document.getElementById("output").innerHTML = "Compare<br/> <img src='answer4.jpg' id='4' width='40%' height='40%'/>" 
    }

}