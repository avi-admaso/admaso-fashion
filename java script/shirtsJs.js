for (var i = 0; i < clothes.length; i++) {
  if (clothes[i].category == "Tshirt") {
    shirtsSection.innerHTML += `
    <div id ="shirtsDiv">
        <p class = "shirtsInfo"> NAME - ${clothes[i].name}<br> PRICE - ${
      clothes[i].price
    }$<br> DESCRIPTION - ${clothes[i].description}</p>
        <button onclick = "addItem(add(${i + 1}))" type="button" id = "${
      clothes[i].id
    }"class="addButton" title="add to cart!">+</button>
        <img onclick="theNextImg(event)" data-secondImg="${
          clothes[i].photo[1]
        }" class="shirtsImg" src="${clothes[i].photo[0]}" alt="">
    </div>`;
  }
}
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

function theNextImg(e) {
  e.stopPropagation();
  const src1 = e.target.getAttribute("src");
  const dataAttrImgUrl = e.target.getAttribute("data-secondImg");
  e.target.setAttribute("src", dataAttrImgUrl);
  e.target.setAttribute("data-secondImg", src1);
}