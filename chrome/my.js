window.addEventListener ("load", myMain, false);

function myMain (evt) {
  // class="day-list-progress" // <div class="day-list-progress" style="width: 100%; display: none;"></div>

  console.log('1111');
  var jsInitChecktimer = setInterval (checkForJS_Finish, 3333);

  function checkForJS_Finish () {
    if ($('.day-list-progress').is(":hidden")) {
      checkPrice();
    }
  }

  function checkPrice() {
    var price = $('div.cba-price a').text().split('¥')[1].replace(",", "");
    console.log(new Date() + price);

    if (price < 3400) {
      clearInterval (jsInitChecktimer);
      // send SMS/ call
      alert('Warning:::::: price: ' + price);
    }
  }

}