// these are the already existing buttons
$(document).ready(function() {

    $("button").on("click", function () {
        var placeButton = $(this).attr("data-place");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            placeButton + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var placeImage = $("<img>");
                    placeImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(placeImage);

                    $("#gifs-appear-here").prepend(gifDiv);

                    $("img").width(300);
                }

            })
    });


    // this is the button to find new gifs

    $("#find-place").on("click", function (event) {

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();

        // Here we grab the text from the input box
        var place = $("#place-input").val();

        // Here we construct our URL
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            place + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";


       


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var placeImage = $("<img>");
                    placeImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(placeImage);

                    $("#gifs-appear-here").prepend(gifDiv);
                    

                    // adding a new button

                   
                    var a = $("<button>");
                    // Adding a class
                    a.addClass("place");
                    // Added a data-attribute
                    a.attr("data-place", place[i]);
                    // Provided the initial button text
                    a.text(place[i]);
                    // Added the button to the HTML
                    $("#buttons").append(a);
                    // set size
                    $("img").width(300);
                   
console.log(response)
                    // =================================================================
                
                }
            })
        })
    });