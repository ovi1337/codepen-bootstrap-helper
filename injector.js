$(document).ready(function () {
    var _injection = `
    <style type="text/css">
      main.dev div[class^="col-"] {
        box-shadow: 0px 0px 1px #888;
      }
      .debug {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1000;
      }
      .debug .label {
        color: black;
      }
      .debug .export {
        color: #ffffff;
        cursor: pointer;
      }
      .debug .export:hover {
        background-color: #999;
      }
      .debug textarea {
        display: none;
        width: 700px;
        height: 500px;
        position: absolute;
        bottom: 20px;
        right: 0px;
        font-size: 10px;
      }
      .debug:hover textarea {
        display: block;
      }
    </style>
    <div class="debug">
      <div class="result"><textarea class="content"></textarea></div>
      <span class="label label-success width"></span>
      <span class="label label-primary device"></span>
      <span class="label label-info size"></span>
      <span class="label label-warning menu"></span>
    </div>
  `;

    $('footer').append(_injection);

    window.addEventListener('resize', windowSize);
    windowSize();

    var size = '';
    var device = '';

    function windowSize() {
        if (window.innerWidth >= 1200) {
            size = 'LG'
            device = 'Desktop Large'
        } else if (window.innerWidth >= 992) {
            size = 'MD'
            device = 'Desktop'
        } else if (window.innerWidth >= 768) {
            size = 'SM'
            device = 'Tablet'
        } else {
            size = 'XS'
            device = 'Phones'
        }

        var menu = (window.innerWidth > 528) ? 'default' : 'mobile';

        $('.debug .width').text(window.innerWidth + ' px');
        $('.debug .device').text(device);
        $('.debug .size').text(size);
        $('.debug .menu').text(menu);

        $('.debug').hover(function () {
            var _export = '<style type="text/css">\n';
            _export += $('head .cp-pen-styles').html();
            _export += '</style>\n';
            _export += $('body main .static-content').html();
            $('.debug .result .content').val(_export);
        });
    }
});
