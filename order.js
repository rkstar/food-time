function hideMenuOptions(){
  $(".js-food-options").hide()
}

function buildOptionsId(category){
  return "#"+category+"-options"
}
function handleFoodCategoryChange(e){
  hideMenuOptions()
  $(buildOptionsId(e.target.value)).show()
}

function listenForFoodItemChange(){
  $("#food").on("change", handleFoodCategoryChange)
}

function initFoodMenu(){
  // hide our js-food-options
  hideMenuOptions()
  
  // add event listener to select list
  listenForFoodItemChange()
}



(function(){$(initFoodMenu)})()