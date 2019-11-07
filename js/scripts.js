function Sandwiches(veggies, size) {
  this.veggies = [],
  this.size = size,
  this.price = 0;
}

Sandwiches.prototype.addPrice = function () {
  this.veggies.forEach(function(veggie) {
    this.price += 1;
  })
  console.log("checkpoint 1");
  if(this.size == 12) {
    this.price += 5;
    console.log("checkpoint 2");
  }
  else if(this.size == 6) {
    this.price += 4;
    console.log("checkpoint 3");
  }
  else if(this.size == 4) {
    console.log("checkpoint 4");
    this.price += 2;
  }
  console.log("checkpoint 5");
  return this.price;
};

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    let vegArray = [];

    var sizeInput = $("option[name='sizes']:checked").val();
    var veggieInput = $("input[name='vegs']:checked").val();

$("input[name='vegs']:checked").each(function() {
    var array = vegArray.push($(this).val());

    // console.log(vegArray);
// console.log(vegArray);
  // console.log(veggieInput, vegArray);
});


    var mySub = new Sandwiches(vegArray, sizeInput)
    let price = mySub.addPrice();
    console.log(price);
    console.log(mySub.size);
    console.log(mySub);

    $('#results').html('Your toppings are ' + vegArray + ' your sub is ' + mySub.size + ' Inches ' + ' the price of your sub is $' + price);

    });
});
