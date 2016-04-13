//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("#startCounting").click(function() {
  var myNumbers=[];
  var tn = parseInt($("#topNumber").val());
  var cbn = parseInt($("#countByNumber").val());

  for(i=0;i<=tn;i+=cbn) {
    myNumbers.push(i);
  }

  $("#showCount").text(myNumbers.join(", "));
});
