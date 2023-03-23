// function viewall() {
// var x=document.getElementById('color').value;
// var y=document.getElementById('bgcolor').value;
// var z=document.getElementById('ih').value;
// alert(x + y + z);
// };
function viewall(){
    // var userInput1 = document.getElementById('Color').value;
    // document.getElementById('main-nav').innerHTML = userInput1;
    document.getElementById('icolor').style.color = document.getElementById('color').value;
     document.getElementById('icolor1').style.color = document.getElementById('color').value;
     document.getElementById('icolor2').style.color = document.getElementById('color').value;
     document.getElementById('icolor3').style.color = document.getElementById('color').value;
     
        document.getElementById('main-nav').style.backgroundColor = document.getElementById('bgcolor').value;
        document.getElementById('main-nav1').style.backgroundColor = document.getElementById('bgcolor').value;
        document.getElementById('main-nav2').style.backgroundColor = document.getElementById('bgcolor').value;
        document.getElementById('main-nav3').style.backgroundColor = document.getElementById('bgcolor').value;

        document.getElementById('icolor').innerHTML = document.getElementById('ih').value;
     document.getElementById('icolor1').innerHTML = document.getElementById('ih').value;
     document.getElementById('icolor2').innerHTML= document.getElementById('ih').value;
     document.getElementById('icolor3').innerHTML= document.getElementById('ih').value;
    };