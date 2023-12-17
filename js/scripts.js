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
  ".about-info__button, .partners__button, .application__button, .sert__button, .sert-second__button, .slider-four__button, .produced__button"
).click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".form").offset().top,
    },
    800
  );
});

// Отправка почты
$('.form__button').click(function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  var name = $('#name').val();
  var phone = $('#phone').val();
  var agreeChecked = $('#agree').is(':checked');
  if (name == '') {
      $('#name').css('border-color', 'red');
      return; // Останавливаем выполнение функции, если поле не заполнено
  } else {
      $('#name').css('border-color', '');
  }

  if (phone == '') {
      $('#phone').css('border-color', 'red');
      return; // Останавливаем выполнение функции, если поле не заполнено
  } else {
      $('#phone').css('border-color', '');
  }

  if (!agreeChecked) {
      alert('Подтвердите пользовательское соглашение');
      return; // Останавливаем выполнение функции, если соглашение не подтверждено
  }

  // Если все поля заполнены и соглашение подтверждено, тогда отправляем данные
  $.ajax({
      type: "POST",
      url: "../php/send_form.php",
      data: {
          name: name,
          phone: phone
      },
      dataType: "json",
      success: function (response) {
          if (response.success) {
            alert('Ваша заявка была успешно отправлена!')
              // Обработка успешной отправки
          } else {
              // Обработка ошибки
              alert('Возникла ошибка при отправке формы')
              alert(response.message);
          }
      }
  });
});