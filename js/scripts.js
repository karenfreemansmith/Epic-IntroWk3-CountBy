$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var countBy = parseInt ($("#countBy").val());
    var countTo = parseInt ($("#countTo").val());
    // manage empty
    if(!countBy || !countTo) {
     alert("You must completely fill out the form if you want to see results");
    }

    if(countTo<0 || countBy<0) {
      if(countTo<0 && countBy<0){
        for(var index=countBy; index >= countTo; index += countBy){
          $("#result").append("<h3>" + index + "</h3>");
        }
      } else if(countTo<0 && countBy>0){
        for(var index=countBy; index >= countTo; index -= countBy){
          $("#result").append("<h3>" + index + "</h3>");
        }
      } else {
          alert("We are not prepared to deal with your negativity");
      }
    } else {
      if(countTo < countBy) {
       alert("Sorry, you can't do that... you can't count to " + countTo + " by " + countBy + "!!");
      }
      for(var index= countBy; index <= countTo; index += countBy) {
        $("#result").append("<h3>" + index + "</h3>");
      }
    }
  });
});
