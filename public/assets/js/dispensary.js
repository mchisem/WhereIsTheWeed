// variables
// var name = "";
// var apiKey = "60ca5c405cmsha8924cbbd9a5b7ep1ee964jsn614923e7e58f";
// var queryURL = "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/"+name+"brands";

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

const oneTitle = $("#one-title");
const twoTitle = $("#two-title");
const threeTitle = $("#three-title");

function runThePage() {
	settings.url = "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/" + name + "brands";
	$.ajax(settings).done(function (response) {

        // Response data
        console.log(response)
        console.log("connected to API")
        
        // Image of Brand
		$("#one-img").attr("src", response.data[0].image);
		$("#two-img").attr("src", response.data[7].image);
		$("#three-img").attr("src", response.data[9].image);

		// Name of Brand 
		$("#one-title").text(response.data[0].name);
		$("#two-title").text(response.data[7].name);
		$("#three-title").text(response.data[9].name);

		// Brand Update 
		// var resUpdate = response.data[0].updatedAt
		// console.log(resUpdate)
		$("#one-date").text(response.data[0].updatedAt);
		$("#two-date").text(response.data[7].updatedAt);
		$("#three-date").text(response.data[9].updatedAt);

		// Brand URL
		$("#one-url").attr("href", response.data[0].url)
		$("#two-url").attr("href", response.data[7].url)
		$("#three-url").attr("href", response.data[9].url)

		
		// name of brand for loop
    //     for (var index = 0; index < response.data.length; index++) {
    //         var cardName = document.getElementsByClassName("card-title");
    //         var resName = response.data[index].name;
    //         $(cardName).text(resName);

    // }
    
	});
	
}

runThePage();

});