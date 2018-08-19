$(document).on("click", ".devour", function () {

    var id = $(this).data("id");

   
    console.log(id);
    // console.log("test");
    $.ajax("/api/burgers/" + id, {
        type: "PUT",

    }).then(function () {
     
        // Reload the page to get the updated list
        location.reload();
    });

});

