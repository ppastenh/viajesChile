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

  $(".textoCard1").on("dblclick", function () {
    $(this).css({
      "color": "rgb(72, 173, 150)",
    })
  })
  
  // Redes Sociales

  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  $(".corazon").on("dblclick", function () {
    $(this).css({
      "color": "red",
    })
  })

});


