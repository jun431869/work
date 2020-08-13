
$(document).ready(function () {

  //活动说明彈窗
  $(".rule_bth").click(function () {
    $(".rule").addClass("active");
  });
  //影片彈窗
  $(".video_bth").click(function () {
    $(".md_video").addClass("active");
  });

  //彈窗取消
  $(".md-close,.md .md-overlay").click(function () {
    $(".md").removeClass("active");
  });

  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });


  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });

  //錨點移動
  $(".m_a").click(function() {
    $("html,body").animate({ scrollTop: $(".bootstrap").offset().top }, 800);
  });

  $(".m_b").click(function() {
    $("html,body").animate({ scrollTop: $(".self").offset().top }, 800);
  });

  $(".m_c").click(function() {
    $("html,body").animate({ scrollTop: $(".rwd_img").offset().top }, 800);
  });

  // 表格切換
  $('.ranking_tab li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".ranking_tab li").removeClass('active');
    $('.ranking_table').eq($tabIndex).fadeIn().siblings(".ranking_table").hide();
  });

  // 表格切換 - 視窗
  $('.ups_tab li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".ups_tab li").removeClass('active');
    $('.ups_table').eq($tabIndex).fadeIn().siblings(".ups_table").hide();
  });


  // 輪播
  var swiper = new Swiper('.swiper-container', {
    //Pagination
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //Arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    loop: 30,
  });

  //浮動按鈕 隨捲軸移動


	$(window).on('scroll', function(){
		scrollTop = $(window).scrollTop();
		if(scrollTop >300){
			$('.cm').stop().animate({'top' : scrollTop + 300 + 'px'}, 400);
		}else{
			$('.cm').stop().animate({'top' : '300px'}, 400);
		}
	});






  //延遲載入
  // 添加生命周期
  const observer = lozad('.lozad', {
    load: function (el) { // 生命周期：加载图片前
      console.log(el.getAttribute('data-name') + '加载前(start)')
      // 需要自定义图片src
      el.src = el.getAttribute('data-src')
    },
    loaded: function (el) { // 加载完毕，实际图片还在pending中，页面还没显示图片
      console.log(el.getAttribute('data-name') + '加载完毕(end)')
      console.log(el)
    }
  })
  observer.observe() // 加载，如果有新图片加入，再次执行即可


  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });

});

