$(function() {
// business logic:
// ui logic:
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var gun_level = parseInt($("#guns").val());
    var pres_level = parseInt($("#pres").val());
    if (gun_level > 0 && gun_level < 11) {
      if (pres_level > 0 && pres_level < 11) {
        var total = (gun_level + pres_level);
        if (total <= 6) {
          $("span#lib").toggle();
        } else if (total >= 7 && total <= 12) {
          $("span#mod").toggle();
        } else {
          $("#con").toggle();
        }
      } else {
        $("#pres").addClass("error");
      }
    } else {
      $("#guns").addClass("error");
    }
  });
});
