var page = require('webpage').create();
page.settings.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36";
console.log('The default user agent is ' + page.settings.userAgent);
//page.settings.userAgent = 'SpecialAgent';
page.open('https://www.skyscanner.net/transport/flights/cph/pek/170412/170417/airfares-from-copenhagen-to-beijing-capital-in-april-2017.html?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=day-view#results', function(status) {
	if (status !== 'success') {
		console.log('Unable to access network');
	} else {
		var ua = page.evaluate(function() {
			console.log(">>>>" );
			return document.documentElement.innerHTML;
		});
		console.log(JSON.stringify(ua));
		console.log(typeof ua);
		console.log(ua);
	}
	phantom.exit();
});