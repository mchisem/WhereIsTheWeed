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
	settings.url = "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/" + name + "brands";
	$.ajax(settings).done(function (response) {
		name(response)
		console.log(response)
		console.log("connected to API")
	});
	
}

runThePage();

// Appending Data error messages about name//
	// function product(response) {
	// 	for (var index = 0; index < response.length; index++) {
	// 		var userSearch = response.data[index].flowers.name
	// 		userSearch = $("<div>").addClass("displayUserSearch")
	// 		infoDiv.append(userSearch)
	// 		$("#info").append(infoDiv)
	// 	}

	// }

// product();

$.ajax(settings).done(function (response) {
	console.log(response, "connected to API");
})
});
