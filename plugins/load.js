CmsRequire.config({
  paths:{
    "adv": 'plugins/adv',
    "advEjectWindow":'plugins/ejectWindow',
    "advBayWindow": 'plugins/bayWindow',
    "advCouplets": 'plugins/couplets',
    "EasyReader": 'plugins/EasyReader.min',
    "jplayer": 'plugins/jquery.jplayer.min',
    "jqueryMd5": 'plugins/jquery.md5.min',
    "jsbrowser": 'plugins/jsbrowser',
    "barrierfree": 'plugins/barrierfree',
    "articlePaginationLoad": 'plugins/articlePaginationLoad',
    "articlePagenation": 'plugins/articlePagination',
    "videoLoad": 'plugins/videoLoad',
    "video": 'plugins/video',
    "ckplayer": 'plugins/ckplayer',
    "articleSlider": 'plugins/articleSlider',
    "articleSliderLoad": 'plugins/articleSliderLoad',
    "expiration": 'plugins/expiration'
  }
});

if (window.location.href.indexOf('advPreview.html') > 0) {
  CmsRequire(['adv', 'articlePaginationLoad', 'videoLoad', 'articleSliderLoad','expiration'], function (e) {
  });
} else {
  $(function () {
    CmsRequire(['adv', 'articlePaginationLoad', 'videoLoad', 'articleSliderLoad','expiration'], function (e) {
    });
  })
}