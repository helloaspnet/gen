(function () {

  
  addNavigators();
  

  
  addProductLinks();
  
  
  addBrandLinks();
  
  

  
  // 添加商品链接
  function addProductLinks() {

    var wh = $.Cookie.get('vip_wh') || 'VIP_NH';
    var whs = wh.toLocaleUpperCase();
    var plinksData = {
      "VIP_NH": ["626529-88420745", "626529-88420737", "626529-88420723", "626529-88420754", "626529-88420722", "626529-88420800", "626529-88420789", "626529-88420787", "626529-88420740", "626529-88420752", "626529-88420774", "651416-90659848", "651416-90659857", "651416-90659850", "651416-90659852", "651416-90659861", "651416-90659853", "651416-90659860", "651416-90659859", "651416-90659868", "651416-90659865", "651416-90659866", "665851-89410673", "665851-89410604", "665851-89410617", "665851-89410648", "665851-89410697", "665851-89410643", "665851-89410657", "665851-89410618", "665851-89410626", "665851-89410556", "665851-89410563"],
      "VIP_SH": ["626529-88420745", "626529-88420737", "626529-88420723", "626529-88420754", "626529-88420722", "626529-88420800", "626529-88420789", "626529-88420787", "626529-88420740", "626529-88420752", "626529-88420774", "651416-90659848", "651416-90659857", "651416-90659850", "651416-90659852", "651416-90659861", "651416-90659853", "651416-90659860", "651416-90659859", "651416-90659868", "651416-90659865", "651416-90659866", "665852-89412622", "665852-89412553", "665852-89412566", "665852-89412597", "665852-89412647", "665852-89412592", "665852-89412606", "665852-89412567", "665852-89412575", "665852-89412505", "665852-89412512"],
      "VIP_CD": ["626529-88420745", "626529-88420737", "626529-88420723", "626529-88420754", "626529-88420722", "626529-88420800", "626529-88420789", "626529-88420787", "626529-88420740", "626529-88420752", "626529-88420774", "651416-90659848", "651416-90659857", "651416-90659850", "651416-90659852", "651416-90659861", "651416-90659853", "651416-90659860", "651416-90659859", "651416-90659868", "651416-90659865", "651416-90659866", "665853-89412779", "665853-89412710", "665853-89412723", "665853-89412754", "665853-89412804", "665853-89412749", "665853-89412763", "665853-89412724", "665853-89412732", "665853-89412662", "665853-89412669"],
      "VIP_BJ": ["626529-88420745", "626529-88420737", "626529-88420723", "626529-88420754", "626529-88420722", "626529-88420800", "626529-88420789", "626529-88420787", "626529-88420740", "626529-88420752", "626529-88420774", "651416-90659848", "651416-90659857", "651416-90659850", "651416-90659852", "651416-90659861", "651416-90659853", "651416-90659860", "651416-90659859", "651416-90659868", "651416-90659865", "651416-90659866", "665854-89412936", "665854-89412867", "665854-89412880", "665854-89412911", "665854-89412961", "665854-89412906", "665854-89412920", "665854-89412881", "665854-89412889", "665854-89412819", "665854-89412826"],
      "VIP_HZ": ["626529-88420745", "626529-88420737", "626529-88420723", "626529-88420754", "626529-88420722", "626529-88420800", "626529-88420789", "626529-88420787", "626529-88420740", "626529-88420752", "626529-88420774", "651416-90659848", "651416-90659857", "651416-90659850", "651416-90659852", "651416-90659861", "651416-90659853", "651416-90659860", "651416-90659859", "651416-90659868", "651416-90659865", "651416-90659866", "665855-89413093", "665855-89413024", "665855-89413037", "665855-89413068", "665855-89413118", "665855-89413063", "665855-89413077", "665855-89413038", "665855-89413046", "665855-89412976", "665855-89412983"]
    };
    var plinks = plinksData[whs];
    $('.kmod-body .kmod-plink').each(function (i) {
      $(this).attr({
        target: '_blank',
        href: 'http://www.vip.com/detail-' + plinks[i] + '.html'
      });
    });

  }

  

  
  // 添加专场链接
  function addBrandLinks() {

    var wh = $.Cookie.get('vip_wh') || 'VIP_NH';
    var whs = wh.toLocaleUpperCase();

    var blinksData = {
      "VIP_NH": ["667583", "667588", "667593"],
      "VIP_SH": ["667584", "667589", "667594"],
      "VIP_CD": ["667585", "667590", "667595"],
      "VIP_BJ": ["667586", "667591", "667596"],
      "VIP_HZ": ["667587", "667592", "667597"]
    };
    var blinks = blinksData[whs];

    // 顺序打乱时这样添加
    $('.kmod-body .kmod-blink').attr({target: '_blank'});
    $('.kmod-body .kmod-blink1').attr({href: 'http://list.vip.com/' + blinks[0] + '.html'});
    $('.kmod-body .kmod-blink2').attr({href: 'http://list.vip.com/' + blinks[1] + '.html'});
    $('.kmod-body .kmod-blink3').attr({href: 'http://list.vip.com/' + blinks[2] + '.html'});

  }

  

  
  // 导航2
  function addNavigators() {

    var $nav = $('.kmod-nav');
    var beginOffset = $nav.offset();

    var $win = $(window);
    var $doc = $(document);

    var $navTarget = $('.kmod-target');

    var navHeight = $nav.outerHeight();
    var endOffset;
    var $footer = $('.kmod-footer');

    if ($footer.length || $footer.is(':visible')) {
      endOffset = $footer.offset();
    }
    else {
      var $kmods = $('.kmods');
      endOffset = $kmods.offset();
      endOffset.top += $kmods.outerHeight();
    }


    var $navTargetNew = $navTarget.map(function () {
      var $this = $(this);
      return {
        top: $this.offset().top,
        $el: $this,
        $ctrl: $('[data-id=' + $this.attr('id') + ']')
      };
    });

    $navTargetNew.sort(function (a, b) {
      return a.top - b.top;
    });
    $win.on({
      'scroll.kmodNav': function () {
        var scrollTop = $doc.scrollTop();

        // 控制导航悬浮
        $nav[scrollTop > beginOffset.top ? 'addClass' : 'removeClass']('kstate-fixed');

        // 控制导航focus效果
        var len = $navTargetNew.length;
        var index = 0;
        do {
          len -= 1;
          index = len;
        }
        while (index >= 0 && scrollTop < $navTargetNew[index].top);

        $navTargetNew.each(function (i, v) {
          v.$ctrl && v.$ctrl.removeClass('kstate-hover');
        });
        index >= 0 && $navTargetNew[index].$ctrl.addClass('kstate-hover');

        // 控制导航focus时底边线左右滑动
        var lastIndex = $nav.data('index');
        $nav.addClass('kstate-hover' + (index + 1));
        if (!isNaN(lastIndex) && index !== lastIndex) {
          $nav.removeClass('kstate-hover' + (lastIndex + 1));
        }
        $nav.data('index', index);


        var endTop = endOffset.top - navHeight - scrollTop;

        if(endTop < 0) return $nav.css({ top: endTop });
        if(scrollTop > beginOffset.top){
          // 控制导航悬浮
          $nav.addClass('kstate-fixed');
          $nav.css({top: 0});
        }
        else {
          // 控制导航悬浮
          $nav.removeClass('kstate-fixed');
          $nav.css({top: 0});
        }



      }
    });

    //$doc.delegate('.kmod-nav a', {
    //  'click.kmodNav': function () {
    //
    //    //$('html, body').scrollTop(200);
    //  }
    //});

  }

  

  
})();