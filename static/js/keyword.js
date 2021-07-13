$(function () {

  var EVENT_CLEAR_KEYWORD = 'clearKeyword';
  var EVENT_SEARCH = 'search';
  // 关键词搜索输入
  $('#search_keyword').on('keyup', function (event) {
    var keyword = $(this).val();
	    if(event.which==13){
    	if($('#search_result .active').length>0){
    		keyword = $('#search_result .active').eq(0).text();
    	}
      openSearch(keyword)
      return;
    }
    keywordChange(keyword);
  });
  



  function keywordChange(keyword) {
    if (keyword === '') {
      $(document).trigger(EVENT_CLEAR_KEYWORD);
    } else {
      $(document).trigger(EVENT_SEARCH, keyword);
      $('#clear_keyword').show();
    }
  }

  // 清空输入框
  $('#clear_keyword').on('click', function () {
    $('#search_keyword').val('');
    $('#search_keyword').focus();
    $(document).trigger(EVENT_CLEAR_KEYWORD);
  });

  // 点击高亮显示
  $('#search_keyword').on('focus',  function () {
    $('.search-left').css(
      {
        "border-style":"solid",
        "border-color": "rgba(24, 144, 255, 1)",
        "box-shadow": "0px 0px 2px 1px rgba(145, 213, 255, 0.96)",
      }
    );
  }).on('blur',  function () {
    $('.search-left').prop('style','');
  });
  // 搜索
  $('#search_submit').on('click', function () {
    var keyword = $('#search_keyword').val();
     openSearch(keyword)
    if ( keyword) {
      window.open( "https://www.baidu.com/s?wd=" + keyword);
	    $('#search_keyword').val('');
    $('#search_keyword').focus();
    }
  });

  $(document).on(EVENT_CLEAR_KEYWORD, function () {
    $('#clear_keyword').hide();
    $('#search_result').hide();
  });


  function openSearch(keyword) {
   if ( keyword) {
    window.open( "https://www.baidu.com/s?wd=" + keyword);
	$('#search_keyword').val('');
	$('#search_keyword').focus();
	$('#clear_keyword').hide();
    }
  }
 

});