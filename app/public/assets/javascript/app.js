console.log("IT IS WORKING")

// Capture the form inputs
$("#submit-button").on("click", function(event) {
    event.preventDefault();

    var surveyResults = {
        name: $("#name").val().trim(),
        photo: $("#photoUrl").val().trim(),
        scores: [
            $("#q1").val().trim(),
            $("#q2").val().trim(),
            $("#q3").val().trim(),
            $("#q4").val().trim(),
            $("#q5").val().trim(),
            $("#q6").val().trim(),
            $("#q7").val().trim(),
            $("#q8").val().trim(),
            $("#q9").val().trim(),
            $("#q10").val().trim()
            ]
    };

        $.post("/api/friends", surveyResults,
            function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");
        });
});