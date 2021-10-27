for (var i = 0; i < clothes.length; i++) {
    if (clothes[i].category == "suits") {
      suitsSection.innerHTML += ` <div id = "suitsDiv"><p class = "suitsInfo"> NAME - ${clothes[i].name}<br> PRICE - ${clothes[i].price}$<br> DESCRIPTION - ${clothes[i].description}</p>
      <button onclick = "addItem(add(${i + 1}))" type="button" id = "${
        clothes[i].id
      }"class="addButton" title="add to cart!">+</button>
      <img onclick="theNextImg(event)" data-secondImg="${clothes[i].photo[1]}" class="suitsImg" src="${clothes[i].photo[0]}" alt=""></div>`;
    }
  }
  function add(id) {
    for (let i = 0; i < clothes.length; i++) {
      if (id == clothes[i].id) {
        return clothes[i];
      }
    }
  }
  let cartNum = 4
cartNumber = document.getElementById("cartNumber");
cartNumber.innerHTML += cartNum
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