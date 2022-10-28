$(function () {
  /* include */
  $('#header').load('./include/header.html', function () {
    $('.side-nav-btn').click(function () {
      $('body').addClass('active')
      $('.aside-nav').addClass('active')
    })
  });
  $('#bottom-navigation').load('./include/bottom-nav.html');
  $('#aside-nav').load('./include/aside-nav.html', function () {
    $('.aside-close').click(function () {
      $('body').removeClass('active')
      $('.aside-nav').removeClass('active')
    })
  });

  /* new btn*/
  $('.new-more-view').click(function () {
    $('.new-last-itembox').toggleClass('active')
  })
  $('.new-more-view').click(function () {
    if ($(this).html() == '접기') {
      $(this).html('펼치기');
    } else {
      $(this).html('접기');
    }
  });
  /*category colum*/
  $('.layout-3colum').click(function () {
    $('.filter-list li').addClass('active');
  })
  $('.layout-2colum').click(function () {
    $('.filter-list li').removeClass('active');
  })
  /*product*/
  $('.product-info big').click(function () {
    $('.product-info big .fa').toggleClass('active')
  })
  $('.detail-open').click(function () {
    $('.product-infomation').toggleClass('active')
  })
  /* cart item delet*/
  $('.cart-item-delet').click(function () {
    $(this).parent().parent().parent('.cart-item').hide()
  })
});