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

function handleSubmit(e){
  e.preventDefault()

  var $formValues = $(this).serializeArray()
  console.log($formValues)

  // for( var i = 0; $formValues.length; i++ ){
  //   var item = $formValues[i]

  //   item.name ... 
  // }

  var formData = {}

  $formValues.map(function(item){
    if( formData.hasOwnProperty(item.name) ){

      var option = formData[item.name]

      // check to see if the key in the formData
      // is already an array....
      if( option instanceof Array ){
        // push the item.value on to the array
        formData[item.name].push(item.value)
      } else {
        // we already have this item.name, but we
        // need to make it into an array.
        formData[item.name] = [formData[item.name]]

        // push our current item.value on to the 
        // newly created array.
        formData[item.name].push(item.value)
      }
    } else {
      // item.name not found... create it on the 
      // formData object
      formData[item.name] = item.value
    }
  })

  console.log(formData)

}

function listenForFormSubmit(){
  $("#menu-form").on('submit', handleSubmit)
}

function initFoodMenu(){
  // hide our js-food-options
  hideMenuOptions()

  // add event listener to select list
  listenForFoodItemChange()

  listenForFormSubmit()
}



(function(){$(initFoodMenu)})()