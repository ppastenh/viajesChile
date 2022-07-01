$(document).ready(function () {

  // navbar

  $(window).on("scroll", function () {
    var wn = $(window).scrollTop();
    if (wn > 120) {
      $(".navbar").css("background", "rgb(15,126,126)");
    }
    else {
      $(".navbar").css("background", "transparent");
    }
  });


  // ¿Quiénes Somos? - Destacados

  $(".titulocard1").click(function () {
    $('.textoCard1').toggle();
  });

  $(".titulocard2").click(function () {
    $('.textoCard2').toggle();
  });

  $(".card")
    .mouseover(function () {
      $(".titulocard2").css("color", "#ffffff");
    })
    .mouseleave(function () {
      $(".textoCard2").css("border-color", "#000000");
    });

  $(".botonEnviar").click(function () {
    alert('Fue enviado correctamente');
  });

  // Redes Sociales

  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

});


