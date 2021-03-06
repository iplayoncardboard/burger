$(function() {
    $('.eatButton').on('click',  function (event){
        console.log("THIS: "+ this);
        let id = $(this).data('id');
        console.log("ID TO Pass: "+ id);

        let devourIt = {
            devoured: true
        }
         // Send the PUT request.
        $.ajax('/api/burgers/'+id, {
                type: 'PUT',
                data: devourIt
            }).then(()=>{
                location.reload();
        });
    }); 

    $(".burger-form").on("submit", (event) => {
        // Prevent default on a submit event.
        event.preventDefault();
    // make new burger object
        let newBurger = {
          burger_name: $("#burger-input").val().trim(),
        };
    
        // POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            //reload page
            console.log("Reloading Page")
            location.reload();
          }
        );
      });

});