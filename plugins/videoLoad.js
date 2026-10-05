$(function () {
  if ($('.edui-upload-video')) {
    CmsRequire(['video', 'ckplayer'], function(e) {
      e.handler()
    })
  }
})