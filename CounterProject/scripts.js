//Going to need 3 buttons, increase, decrease, and reset
//should be able to have no limit.
//Creating count variable at a base value != 0 so that we can verify buttons work
var count=25;
//if user clicks on clear, the counter is reset to 0.
//Creating the button
let clearBut=document.createElement('button');
let cleartext=document.createTextNode('Clear Count');
clearBut.appendChild(cleartext);
document.getElementById('buttons').appendChild(clearBut);
//creating the button event listener for onclick
clearBut.onclick= function clearCounter(){
if (count!=0){
    count=0;
    renderCounter();
} else {
    alert('Counter is already 0!')
    renderCounter();
}
};

//Rendering the counter at the value of count.
let counter=document.createTextNode(count);
let $p=document.getElementById('counter');
$p.appendChild(counter);
function renderCounter(){
document.getElementById('counter').textContent=count;
console.log(count);
if (count>0){
    document.getElementById('counter').style.color='green';
} else if (count<0){
    document.getElementById('counter').style.color='red';
} else {
    document.getElementById('counter').style.color='blue';
}
};

//   -> if the user clicks on increase, the counter increases by 1.
//      ->counter++, re-render
let increaseBut=document.createElement('button');
let increaseText=document.createTextNode('Increase');
increaseBut.appendChild(increaseText);
document.getElementById('buttons').appendChild(increaseBut);

increaseBut.onclick = function increase(){
count++;
renderCounter();
};

//   -> if the user clicks on decrease, the counter decreases by 1.
//      ->counter--, re-render
let decreaseBut=document.createElement('button');
let decreaseText=document.createTextNode('Decrease');
decreaseBut.appendChild(decreaseText);
document.getElementById('buttons').appendChild(decreaseBut);

decreaseBut.onclick = function decrease(){
count--;
renderCounter();
};

//going to have an internal clock to increase counter by 1 per sec
//will work as a timer.
