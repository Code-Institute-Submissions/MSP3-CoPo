$(document).ready(function () {
  /** EVENT HANDLERS */
  $("ul").hide();

  $(".copo-creations").click(function () {
    $(".copo-creations").addClass("inactive");
    $(this).removeClass("inactive");
    $(this).addClass("active");
    $(".inactive").slideToggle();
    $("h6").slideToggle();
    $(".inactive").parent().slideToggle();

    if ($(this).children().text() == "Themes") {
            $("#theme-list").slideToggle();
    } else if ($(this).children().text() == "Authors") {
            $("#author-list").slideToggle();
    } else if ($(this).children().text() == "Titles") {
            $("#title-list").slideToggle();
    } else {
    };
  });

  $("li").click( function() {
      console.log("list clicked");
  });

$("select").change(function(){
  if ($(this).val() == "Other") {
      $(".vis").css("display", "block");
  } else {
      $(".vis").css("display", "none");
  };
});

});