$(document).ready(function(){
    $('.modal').modal();

    $('.save-comment').click(function(){
        let thisId = $(this).attr('data-id'); 
        let comment = $(`#modal${thisId} #userComment`).val()
        console.log(comment, thisId)
        $(`#modal${thisId} #userComment`).val("");

        $.ajax({
            method: "POST",
            url: "/articles/" + thisId,
            data: {
              body: comment 
            }
          })
            // With that done
            .then(function(data) {
              // Log the response
              console.log(data);
              location.reload();
            
            });

    });

    $('body').on("click", 'a.open-comment', function() {
        let thisId = $(this).attr("data-id");
        console.log(thisId);
        $.ajax({
            method: "GET",
            url: "/articles/" + thisId
          })
            .then(function(data) {
              console.log(data);
              if (data.comment) {
                  $(`#modal${thisId} #comments`).text(data.comment.body)
              }

            })
    })

});
