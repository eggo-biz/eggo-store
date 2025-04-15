(function ($) {
  function spinInputSettings() {
    $(document).on('click', '.spin-input-control', function (e) {
      e.preventDefault();
      let $clicked = $(this),
        $input = $clicked.parent().find('input'),
        input = $input[0];
      if ($clicked.hasClass('spin-input-minus')) {
        input.stepDown();
      } else {
        input.stepUp();
      }
      $input.trigger('change');
    });
    $(document).on('change', '.spin-input-field', function () {
      let $input = $(this),
        spinInput = $input.closest('.spin-input'),
        value = parseInt($input.val()),
        minValue = parseInt($input.attr('min')),
        maxValue = parseInt($input.attr('max'));
      spinInput.removeClass('reached-min reached-max')
      if (value === minValue) {
        spinInput.addClass('reached-min');
      } else if (value === maxValue) {
        spinInput.addClass('reached-max');
      }

    });
    $(document).on("input", ".spin-input-field", function () {
      let value = $(this).val(),
        minValue = $(this).attr('min');
      maxValue = $(this).attr('max');
      // Remove non-numeric characters
      value = value.replace(/\D/g, "");
      // Prevent leading zeros
      if (value.length > 1 && value.startsWith("0")) {
        value = value.replace(/^0+/, ""); // Remove all leading zeros
      }
      if (value < minValue) {
        value = minValue;
      } else if (value > maxValue) {
        value = maxValue;
      }
      $(this).val(value);
      $(this).trigger('change');
    });
    $(document).on("keydown", ".spin-input-field", function (e) {
      // Block decimal points (.)
      if (e.key === "." || e.key === ",") {
        e.preventDefault();
      }
    });
    $(document).on("blur", ".spin-input-field", function (e) {
      if ($(this).val() === '') {
        $(this).val($(this).attr('min'));
      }
    });
  }
  $(document).ready(function () {
    spinInputSettings();
  });
  // $(window).on('load', function () {});
  // $(window).on('scroll', function () {});
  // $( document ).ajaxComplete(function() {})
  // $(window).on('resize', function () {});
}(jQuery));
