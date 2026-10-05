$(function () {
  try {
    if ($('.article-pagenation')) {
      if($('.article-pagenation').html() && $('.article-pagenation').html().indexOf('_page_break_tag_')) {
        CmsRequire(['articlePagenation'], function (e) {
          e.handler()
        })
      }
    }
  } catch (error) {

  }
})
