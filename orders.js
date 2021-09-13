for (var i = 0; i < clothes.length; i++) {
  if (clothes[i].category == "jeans") {
    jeansSection.innerHTML += ` <div id =  "objectsDiv"><img src =  "${clothes[i].photo}""></div>`;
  }
}
for (var i = 0; i < clothes.length; i++) {
  if (clothes[i].category == "Tshirt") {
    shirtsSection.innerHTML += ` <div id = "shirtsDiv"> <img src =  "${clothes[i].photo}""></div>`;
  }
}
