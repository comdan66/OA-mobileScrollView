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
        trigger_length: 50,
        show_arrow: false
      },
      init = function (opt) {
        var i = 1,
            $scroll = $(this).addClass (opt.show_arrow ? 'a' : null),
            $la = $('<a />').prependTo ($scroll).append ('❮'),
            $ra = $('<a />').appendTo ($scroll).append ('❯'),
            $div = $scroll.find ('> div'),
            $unit = $div.find ('> *'),
            w = $scroll.width (),
            uw = $unit.width () + parseFloat ($unit.css ('border-left-width')) + parseFloat ($unit.css ('border-right-width')) + parseFloat ($unit.css ('margin-right')) + parseFloat ($unit.css ('margin-right')),
            temp = (uw - w) / 2,
            l = -(uw * i + temp);

        $div.addClass ('n' + $unit.length).css ({'left': l}).draggable ({
          axis: 'x',
          start: function () {
            $(this).removeClass ('t');
          },
          stop: function () {
            $(this).addClass ('t');

            if (Math.abs (($(this).offset().left + uw * i + temp) % w) > opt.trigger_length) i += parseFloat (($(this).offset().left + uw * i + temp)) < 0 ? 1 : -1;
            if (i + 1 > $unit.length) i = $unit.length - 1;

            l = -(uw * i + temp);

            $(this).css ({'left': (i + 1 == $unit.length ? l - temp : (l > 0 ? 0 : l)) + 'px' });
          }
        });
        $ra.click (function () {
          $div.addClass ('t');
          if (++i > $unit.length) i = $unit.length - 1;
          l = -(uw * i + temp);
          $div.css ({'left': (i + 1 == $unit.length ? l - temp : (l > 0 ? 0 : l)) + 'px' });
        });
        $la.click (function () {
          $div.addClass ('t');
          if (--i - 1 < 0) i = 0;
          l = -(uw * i + temp);
          $div.css ({'left': (i + 1 == $unit.length ? l - temp : (l > 0 ? 0 : l)) + 'px' });
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