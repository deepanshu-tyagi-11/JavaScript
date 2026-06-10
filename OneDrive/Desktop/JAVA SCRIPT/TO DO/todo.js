let todolist=[
    {
    iteam : 'buy milk',
     duedate:'5/6/2024',
    },
 {
    iteam :'go to college',
    duedate:'5/6/2034',
 }
];// yaha haimna object bna lia hai..

displayitems();// yai method haimna call kra hai ek bar page load krna se phala..

function addtodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoiteam = inputElement.value;
    let tododate = dateElement.value;
    todolist.push({iteam:todoiteam,duedate:tododate});// ab haiman yaha dono value push kr de hai..

// todolist.push(todoiteam); 1.)OR ab yaha mai object bhe add kruga  todo lsit vala [todo iteam] or [tododate]..
// 2.)jo bhe hum apna placeholder mai likhyga vo hamara console mai add ho jayga //yadi ma console mai [todolist] print kruga to jo haimna add kia tha vo hama console mai print ho jayga.// call kra hai bus
inputElement.value="";// yaha haimna donon ke value blank kr de hai [date, OR input ]ke..
dateElement.value="";
displayitems(); //ek naya iteam add krna ka bad call kra hai yaha haimna islyia..
}



function displayitems(){// ab hum jo bhe text ka ander likhyga vo hamara is function ke madad se display pai show ho jayga.
let containerElement = document.querySelector('.todo-container'); // haina yaha pai conatiner ko queryselector ke madada se ACCES kr lia..

let newHtml='';

// displayelement.innertext=''; isa hata deyga.
for(let i=0; i<todolist.length; i++){
// let iteam = todolist[i].iteam;
// let duedate = todolist[i].duedate;
let {iteam , duedate} = todolist[i];
newHtml+=`

<span>${iteam}</span>
<span>${duedate}</span>
<button class = 'btn-delete' onclick = "todolist.splice(${i} , 1);displayitems();">DELETE</button>

`;
//div ka ander haimna phla i index ka element ko delete kr dia  aur phir dobara apna function ko call kr dia..
// displayelement.innerText = displayelement.innerext + "\n" + todolist[i]; isa bhe delete kr dega
}
containerElement.innerHTML = newHtml;// yaha pai hum apni innerhtml ko new html se replace kr dega..
}