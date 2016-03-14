/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

(function( factory ) {
  if ((typeof define === 'function') && define.amd) define (['jquery'], factory);
  else factory (jQuery);
}(function ($) {

  $.fn.extend ({
    OAmobileScrollView: function (opt) {
      var d4Opt = {
      },
      init = function (opt) {
        var i = 1,
            $scroll = $(this),
            $div = $scroll.find ('> div'),
            $unit = $div.find ('> *'),
            w = $scroll.width (),
            uw = $unit.width () + parseFloat ($unit.css ('border-left-width')) + parseFloat ($unit.css ('border-right-width')) + parseFloat ($unit.css ('margin-right')) + parseFloat ($unit.css ('margin-right')),
            temp = (uw - w) / 2;

        $div.css ({'left': -(uw * i + temp)}).draggable ({
          axis: 'x',
          start: function () {
            $(this).removeClass ('t');
          },
          stop: function () {
            $(this).addClass ('t');

            if (Math.abs (($(this).offset().left + uw * i + temp) % w) > w / 3) i += parseFloat (($(this).offset().left + uw * i + temp)) < 0 ? 1 : -1;
            if (i + 1 > $unit.length) i = $unit.length - 1;

            var l = -(uw * i + temp);
            $(this).css ({'left': (i + 1 == $unit.length ? l - (temp) : (l > 0 ? 0 : l)) + 'px' });
          }
        });
        $scroll.addClass ('s');
        setTimeout (function () {
          $scroll.addClass ('z');
        }, 300);
      };

      opt = $.extend (true, d4Opt, opt);

      return $(this).addClass ('OA-mobileScrollView').each (function () {
        setTimeout (init.bind ($(this), opt), 50);
      });
    }
  });
}));