$.init();
$('.bar>.tab-item').on('touchstart', function(e){
    var index = $(this).index();
    var url = '';
    switch( index ){
      case 0:
          url = './index.html';
        break;
      case 1:
        url = './upload.html';
        break;
      case 2:
        url = './my.html';
        break;
      case 3:
        url = './more.html';
        break;
      default:
    }
    if(url != ''){
      location.href = url;
    }
});
