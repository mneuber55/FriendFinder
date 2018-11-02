
// console.log("IT IS WORKING");

// // Capture the form inputs
// $("#submit-button").on("click", function(event) {
//     event.preventDefault();

//     var surveyResults = {
//         name: $("#name").val().trim(),
//         photo: $("#photoUrl").val().trim(),
//         scores: [
//             $("#Q1").val().trim(),
//             $("#Q2").val().trim(),
//             $("#Q3").val().trim(),
//             $("#Q4").val().trim(),
//             $("#Q5").val().trim(),
//             $("#Q6").val().trim(),
//             $("#Q7").val().trim(),
//             $("#Q8").val().trim(),
//             $("#Q9").val().trim(),
//             $("#Q10").val().trim()
//             ]
//     };

//         $.post("/api/friends", surveyResults,
//             function(data) {

//         // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//         $("#match-name").text(data.name);
//         $("#match-img").attr("src", data.photo);

//         // Show the modal with the best match
//         $("#results-modal").modal("toggle");
//         });
// });