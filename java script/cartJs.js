var cartObj = [
  {
    id: 26,
    name: "gucci",
    price: 950,
    category: "shoes",
    description:
      "fashion shoe good quialty <br> for people who love and know fashion",
    photo: [
      "https://assetsprx.matchesfashion.com/img/product/1300/1223710_1.jpg",
      "https://assetsprx.matchesfashion.com/img/product/1300/1223710_5.jpg",
    ],
  },
  {
    id: 39,
    name: "tom ford",
    price: 1900,
    description:
      "fashion suit good quialty <br> for people how love and know fashions suits",
    category: "suits",
    photo: [
      "https://assetsprx.matchesfashion.com/img/product/1300/1277894_1.jpg",
      "https://assetsprx.matchesfashion.com/img/product/1300/1277894_2.jpg",
    ],
  },
  {
    id: 20,
    name: "mike amiri",
    price: 240,
    category: "Tshirt",
    description:
      "fashion shirt good quialty <br> for people how love and know fashions shirt",
    photo: [
      "https://assetsprx.matchesfashion.com/img/product/1300/1420894_1.jpg",
      "https://assetsprx.matchesfashion.com/img/product/1300/1420894_4.jpg",
    ],
  },
  {
    id: 44,
    name: "tom ford",
    price: 3900,
    description:
      "fashion suit good quialty <br> for people how love and know fashions suits",
    category: "suits",
    photo: [
      "https://assetsprx.matchesfashion.com/img/product/1300/1397373_1.jpg",
      "https://assetsprx.matchesfashion.com/img/product/1300/1397373_6.jpg",
    ],
  },
];

document.getElementById("theCart");
for (var i = 0; i < cartObj.length; i++) {
  if (i < cartObj.length) {
    theCart.innerHTML += `
    <tr id = "${cartObj[i].id}">
    
      <td> <form>
        
       <select id="chooseSize" name="clothes">
         <option class="sizes">small</option>
         <option class="sizes">medium</option>
         <option class="sizes">laege</option>
         <option class="sizes">xlarge</option>
       </select>
       
     </form>

       NAME - ${cartObj[i].name} <br>
     
       DESCRIPTION - ${cartObj[i].description}<br>
     
       PRICE - ${cartObj[i].price}$<br>
      </td>
      </td>
      
      <td> 
        <img  id = "imgeSize" src ="${cartObj[i].photo[0]};"
        <button onclick="removeItem(${cartObj[i].id})"  id = "removeButton">to remove click on photo</button>
      </td>
      <tr id = theCheckTd>
      
      </tr>
    </tr>`;
    
  }
}
function theCheck() {
  var sum = 0;
  for (var i = 0; i < cartObj.length; i++) {
    sum += cartObj[i].price;
  }
  return sum;
  
}theCheckText.innerHTML =  ` TOTAL CHECK - ${theCheck()}$`;



function removeItem(id) {
  for (let i = 0; i < cartObj.length; i++) {
    if (cartObj[i].id == id) {
      cartObj.splice(i, 1);

      console.log(cartObj);
      document.getElementById(id).innerHTML = `
      <p> this item has been removed</p>`;
      theCheckText.innerHTML =  ` TOTAL CHECK - ${theCheck()}$`;
      
    }
  }
}
