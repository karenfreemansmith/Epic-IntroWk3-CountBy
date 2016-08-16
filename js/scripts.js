$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var countBy = parseInt ($("#countBy").val());
    var countTo = parseInt ($("#countTo").val());
    for(var index= countBy; index <= countTo; index += countBy) {
      $("#result").append("<h3>" + index + "</h3>");
    }
  });
});
