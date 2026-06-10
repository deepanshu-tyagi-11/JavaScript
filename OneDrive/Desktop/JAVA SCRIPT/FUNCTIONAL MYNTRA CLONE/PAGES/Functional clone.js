let bagitems;
onload();

function onload(){
  let bagitemsStr = localStorage.getItem('bagitems');
  bagitems=bagitemsStr? JSON.parse(bagitemsStr):[];//yai  upper ke  2 line islyia likhi hai ke page refresh krna pai jo item haimna addd kia hai vo reset na ho jai add to bag mai se.. 
displayitemsonhomepage();
displaybagicon();// yaha haimna function call kr dia.
}

function addtobag(itemsid){
bagitems.push(itemsid);
localStorage.setItem('bagitems', JSON.stringify(bagitems));// yai haimna local strorage islyia bnai ha kyoki jub hum add to bag krayag to jo naya page khul kr ayga ..yaha pai hamri yai vali js kam kr jay islia haimna yaha yai local storage bnai  hai..
displaybagicon();
}


function displaybagicon() {
  let bagitemcountElement = document.querySelector('.bag-item-count');
  //yaha haimna islyia if else condition lagai kuki  hama bag mai se 0 hatan tha.
    if (bagitems.length > 0) {
      bagitemcountElement.style.visibility = 'visible';
      bagitemcountElement.innerText = bagitems.length;
    } else {
      bagitemcountElement.style.visibility = 'hidden';
    }
  }



displayitemsonhomepage();// yaha haimna items ko call kr dia.
function displayitemsonhomepage(){
  let itemscontainerElement = document.querySelector('.items-container');

  if(!itemscontainerElement){// yai haimna if condition islyia lagi hai kuki hamri jo js the vo [bag.js] pai apply nhi ho rahi the islyia haina yai conditon lagi hai truthy aur falsy vali..
    return;
  }


let innerHTML = '';
items.forEach(item => {
  innerHTML += `
    <div class="item-container"> 
      <img class="image-edit" src="${item.image}" alt="item image">

      <div class="rating">${item.rating.stars}⭐ | ${item.rating.count} reviews</div>
      
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="rupees">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.orignal_price}</span>
        <span class="offer">${item.offer || item.discount_percentage || 0}% OFF</span>
      </div>
      <button class="AddtoBag" onclick="addtobag(${item.id})">Add to Bag</button>
    </div>`;//onlcik ka ander haimna ek method add kr dia. ab is method ko upper define krayga aur isa property define krayag.
    itemscontainerElement.innerHTML= innerHTML;
});
}

// // ab muja yaha item nhi chyia  multiply iteams chyia to mai yaha  [FOR EACH LOOP LAUGA] mtlb sabhi items ke details ka lia  jo haimna iteam .js mai bnaya hai.
// // let itemscontainerElement = document.querySelector('.items-container');
// // Assuming `items` is an array of objects

