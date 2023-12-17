$(".faq__block").on("click", ".faq__item", function () {
  var answer = $(this).find(".faq__answer");
  $(".faq__answer").not(answer).slideUp();
  answer.slideToggle();
  $(".faq__item").not(this).removeClass("faq__item--active");
  $(this).toggleClass("faq__item--active");
});

// Бургер
$(".header-menu__mobile-burger").click(function () {
  console.log("123");
  $(".header-menu__mobile-burger").toggleClass("open-menu");
  $(".header-menu__mobile-nav").toggleClass("header-menu__mobile-nav--hidden");
});

//
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(
  ".about-info__button, .partners__button, .application__button, .sert__button, .sert-second__button, .slider-four__button"
).click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".form").offset().top,
    },
    800
  );
});

// Отправка почты
$(".form__button").click(function () {
  var name = $("#name").val();
  var phone = $("#phone").val();

  if (name === "") {
    $("#name").css("border-color", "red");
  } else {
    $("#name").css("border-color", "");
  }

  if (phone === "") {
    $("#phone").css("border-color", "red");
  } else {
    $("#phone").css("border-color", "");
  }

  if (name !== "" && phone !== "") {
    $.ajax({
      type: "POST",
      url: "../php/send_email.php",
      data: {
        name: name,
        phone: phone,
      },
      dataType: "json",
      success: function (response) {
        if (response.success) {
          // Обработка успешной отправки
        } else {
          // Обработка ошибки
          alert(response.message);
        }
      },
    });
  }
});
