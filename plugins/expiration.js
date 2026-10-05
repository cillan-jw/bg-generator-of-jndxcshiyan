window.addEventListener('load', expiration)
function expiration() {
  var list = document.getElementsByClassName('prefixContent')
  var listsuf = document.getElementsByClassName('suffixContent')
  var now = new Date();
  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0).getTime();
  // let prefixContentlist = [...list, ...listsuf]
  var prefixContentlist = []
  for (let i = 0; i < list.length; i++) {
    prefixContentlist.push(list[i])
  }
  for (let i = 0; i < listsuf.length; i++) {
    prefixContentlist.push(listsuf[i])
  }

  for (let i = 0; i < prefixContentlist.length; i++) {
    var overTime
    var origintime
    if (prefixContentlist[i].attributes && prefixContentlist[i].attributes.overtime) {
      overTime = prefixContentlist[i].attributes.overtime.value
    }
    if (prefixContentlist[i].attributes && prefixContentlist[i].attributes.origintime) {
      origintime = prefixContentlist[i].attributes.origintime.value
    }

    if (overTime && origintime) {
      overTime = overTime * 1
      origintime = origintime * 1
      var value = prefixContentlist[i].style.display;
      if (overTime > 0) {
        let overDate = overTime * 86400000 + origintime
        // 兼容历史数据
        if(value === 'none'){
            if (startOfDay <= overDate) {
              prefixContentlist[i].style.display = "";
            }
        }else{
            if (startOfDay > overDate) {
              prefixContentlist[i].parentNode.removeChild(prefixContentlist[i])
          }
        }
      } else if(overTime === -1){
        if(value === 'none'){
          prefixContentlist[i].style.display = "";
        }else{
          prefixContentlist[i].parentNode.removeChild(prefixContentlist[i])
        }
      }
    }
  }
}