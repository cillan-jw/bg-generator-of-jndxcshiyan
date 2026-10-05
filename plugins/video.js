CmsDefine(function (require, factory) {
  return {
    handler: function () {
      $('.edui-upload-video').each(function (index) {
        var width = $(this).attr('width');
        var height = $(this).attr('height');
        var src = $(this).attr('src');
        var tmpAutoPlay = 0
        if (!(typeof(cmsAutoPlay) == "undefined")){
          tmpAutoPlay = cmsAutoPlay
        }
        var autoplay = tmpAutoPlay == 0 ? false : true;
        var poster = $(this).attr('_poster') || $(this).attr('poster');
        $(this).before('<div id="h-ckplayer-contain' + index + '" style="display: inline-block;width:' + width + 'px; height: ' + height + 'px"></div>');
        $(this).remove();
        var videoObject = {
          container: '#h-ckplayer-contain' + index, //“#”代表容器的ID，“.”或“”代表容器的class
          autoplay: autoplay, // 是否自动播放
          poster: poster, // 封面
          variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
          video: src, //视频地址
          mobileCkControls: true,
          volume: 0
        };
        var player = new ckplayer(videoObject);
      })
    }
  }
})