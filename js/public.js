/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('.icon-more').click (function () {
    $(this).toggleClass ('s');
  });
  $('#fb').click (function () {
    window.open ('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '分享', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
  });
  $('.scroll').OAmobileScrollView ();
});