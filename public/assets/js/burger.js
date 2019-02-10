// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-btn").on("click", function(event) {
      let id = $(this).attr("data-id");
      console.log(id);
  
      let newDevourState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevourState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devour: 0
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger, " + newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete-btn").on("click", function(event){
      event.preventDefault();
      let id = $(this).attr("data-id");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function(){
        console.log("Burger deleted", id);
        location.reload();
      });
    });
  });
  