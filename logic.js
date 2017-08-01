var animalButtons = ["pidgeon", "chicken", "english bulldog", "stork", "humming bird", "sea gull", "owl", "cuckoo", "bald eagle", "toucan", "parrot"];
var makeButtons = [];
var i ;

//create a button for everything in animalButtons

for (i = 0; i < animalButtons.length; i++ ) {
		$(".buttons").append("<input type='button'" + " " + "id = " + "'" + animalButtons[i] + "'" + " " + "value = '" + animalButtons[i] + "'>");	
}

//build the query url with the q-variable empty...(because it will be supplied by the user??)
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q&limit=9&q=";
var searchTerm = $("#search-box").val();
var buttonSearch = $(".buttons").this("#id");


//some api shit happens here
function myFunction() {
	
	$("#search-box").text(appendTo("q"));

//assign the search-box item to q, and add the value for q to the queryURL
	$.ajax({
		url: queryURL + searchTerm,
		method: 'GET'

//take the response from the server and add it to makeButtons
	}).done(function(response){
		$(".makeButtons").append(response);
	});
};

$(document).ready(function() {
	$(".buttons")
});




//api key:
//dc6zaTOxFJmzC