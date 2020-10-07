$(document).ready(function(){
	var name = ""

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com",
			"x-rapidapi-key": "60ca5c405cmsha8924cbbd9a5b7ep1ee964jsn614923e7e58f"
		}
	}


function runThePage() {
	name = document.getElementById('info goes here').value
	settings.url = "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/" + name;
	$.ajax(settings).done(function (response) {
		name(response)
		console.log(response, "connected to API")
	});
	
}

runThePage();

$.ajax(settings).done(function (response) {
	console.log(response, "connected to API");
})
});
