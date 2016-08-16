$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    alert($("#countBy").val());
    alert($("#countTo").val());
  });
});
