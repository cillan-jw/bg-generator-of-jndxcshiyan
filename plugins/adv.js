var advJsonData
var advUrl1
var bayWindowLength = 0 // 判断飘窗加载次数，飘窗只加载一次
var advUrl2 = 'script/plugins.js'
if (getQueryString('isPreview')) { // 判断是否是预览
  // url = advJsonPath+'global.js'
  // url2 = allPageJsonPath+'global.js'
  $.ajax({
    url: '/api-gateway/jpaas-cms-server/manager/global/params/find',
    type: 'post',
    dataType: 'json',
    data: {
      webAdvertiseId: getQueryString("iid"),
    },
    success: function (res) {
      if (res.success) {
        var data = JSON.parse(res.data.globalParams.advertiseJson)
        for (var i = 0; i < data.length; i++) {
          loadAdvScript(data[i])
        }
      }
    },
    error: function (err) {
      throw err
    }
  })
} else {
  if (document.getElementById('pagetype').content != 1) {
    var hrefArr = window.location.href.split('/');
    var htmlName = hrefArr[hrefArr.length - 1];
    if (!htmlName) {
      htmlName = 'index';
    }
    var columnPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))
    htmlName = htmlName.replace('.html', '').replace('.htm', '');
    advUrl1 = columnPath + '/' + htmlName + '/script/plugins.js'
    loadScript(advUrl1, function () {
      loadJsonData(advUrl1)
    })
  } else {
    loadScript(advUrl2, function () {
      loadJsonData(advUrl2)
    })
  }
}


// 加载js文件
function loadJsonData() {
  try {
      for (var i = 0; i < jsonArrData.length; i++) {
        advJsonData = jsonArrData[i]
        if ($.cookie('displayOnceId') === undefined || $.cookie('displayOnceId') === null) {
          $.cookie('displayOnceId', '', {
            path: '/'
          })
        }
        if (advJsonData.displayTimes === 'once') {
          if ($.cookie('displayOnceId').indexOf(advJsonData.iid) === -1) {
            var id = ' ' + advJsonData.iid
            var ids = $.cookie('displayOnceId')
            $.cookie('displayOnceId', ids + id, {
              path: '/'
            })
            loadAdvScript(advJsonData)
          }
        } else {
          loadAdvScript(advJsonData)
        }
      }
  } catch (error) {
  }

}


// 加载相对应js脚本
function loadAdvScript(advJsonData) {
  if (advJsonData.advertiseType === 'ejectWindow') { // 公告类型为弹窗
    CmsRequire(['advEjectWindow'], function (e) {
      e.handler(advJsonData)
    })
  } else if (advJsonData.advertiseType === 'bayWindow') { // 公告类型为飘窗
    if (bayWindowLength === 0) {
      CmsRequire(['advBayWindow'], function (e) {
        e.handler(advJsonData)
      })
      bayWindowLength++
    }
  } else if (advJsonData.advertiseType === 'couplets') { // 公告类型为对联
    CmsRequire(['advCouplets'], function (e) {
      e.handler(advJsonData)
    })
  }
}

// 获取js文件 并添加到页面中
function loadScript(src, callback) {
  try {
    var script = document.createElement('script')
    var head = document.getElementsByTagName('head')[0]
    script.type = 'text/javascript'
    script.charset = 'UTF-8'
    script.src = src
    if (script.addEventListener) {
      script.addEventListener('load', function () {
        callback()
      }, false)
    } else if (script.attachEvent) {
      script.attachEvent('onreadystatechange', function () {
        var target = window.event.srcElement
        if (target.readyState === 'loaded') {
          callback()
        }
      })
    }
    head.appendChild(script)
  } catch (e) {

  }
}

// 获取url参数
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}