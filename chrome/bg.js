chrome.webRequest.onBeforeRequest.addListener(
    function () {
      var url = "https://www.skyscanner.net/transport/flights/cph/pek/170412/170417/airfares-from-copenhagen-to-beijing-capital-in-april-2017.html?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=true&outboundaltsenabled=false&inboundaltsenabled=false&ref=home#results";

        var uu = "https://www.skyscanner.net/transport/flights/cph/pek/170412/170417/airfares-from-copenhagen-to-beijing-capital-in-april-2017.html" +
            "?adults=1&children=0&adultsv2=1&childrenv2=&infants=0" +
            "&cabinclass=economy&rtn=1&preferdirects=true&outboundaltsenabled=false&inboundaltsenabled=false&ref=home#results"

        return {redirectUrl: url};//转换URL
    }, {
      urls: [
        "https://kaige.com/*"
      ]
    },
    // extraInfoSpec
    ["blocking"]);