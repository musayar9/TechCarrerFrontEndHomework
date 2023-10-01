$(document).ready(function () {
  $(".btn").click(function () {
    $("li").toggleClass("show");
    $("ul").toggleClass("nav-active");
    $(".btn").toggleClass("active");
    $("main").toggleClass("main-active");
  });
   $("a[href^='#']").on("click", function (e) {
     e.preventDefault();
     var target = this.hash;

     $("html, body").animate(
       {
         scrollTop: $(target).offset().top,
       },
       10,
       "swing",
       function () {
         window.location.hash = target; // Tarayıcı URL'sini güncelle
       }
     );
   });

});
