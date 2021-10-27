for (var i = 0; i < clothes.length; i++) {
  if (clothes[i].category == "jeans") {
    jeansSection.innerHTML += ` <div id =  "jeansDiv"><p class = "jeansInfo"> NAME - ${
      clothes[i].name
    }<br> PRICE - ${clothes[i].price}$<br> DESCRIPTION - ${
      clothes[i].description
    }</p>
    <button onclick = "addItem(add(${i + 1}))" type="button" id = "${
      clothes[i].id
    }"class="addButton" title="add to cart!" >+</button>
  
    <img onclick="theNextImg(event)" data-secondImg="${
      clothes[i].photo[1]
    }" id="jeansImag" src="${clothes[i].photo[0]}" alt=""></div>`;
  }
}

removeButton = document.getElementsByClassName("removeButton");
addButton = document.getElementsByClassName("addButton");
let cartNum = 4
cartNumber = document.getElementById("cartNumber");
cartNumber.innerHTML += cartNum

function theNextImg(e) {
  e.stopPropagation();
  const src1 = e.target.getAttribute("src");
  const dataAttrImgUrl = e.target.getAttribute("data-secondImg");
  e.target.setAttribute("src", dataAttrImgUrl);
  e.target.setAttribute("data-secondImg", src1);
}

// var cartObj=[];

// for (var i = 0; i < addButton.length; i++) {
//     addButton.onclick=()=>{
//       if(clothes[i].id == clothes[i].id[i])
//       cartObj.push(clothes[i]);
//       alert("add item to cart")
//     console.log(cartObj);
// }
// }

// for (var i = 0; i < removeButton.length; i++) {
//     removeButton[i].onclick = ()=>{
//         for (var j = 0; j < cartObj.length; j++) {
//             if (cartObj[j] == clothes[i]) {
//                 cartObj.pop()
//                 alert("remove item from cart")
//                 console.log(cartObj);
//             }

//         }
//     }

// }
function add(id) {
  for (let i = 0; i < clothes.length; i++) {
    if (id == clothes[i].id) {
      return clothes[i];
    }
  }
}

function addItem(i) {
  cartObj.push(i);
  console.log(cartObj);
}
