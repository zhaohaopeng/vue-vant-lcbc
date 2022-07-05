export function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (null);
}

export function getQueryParam(url) {
  const str = url.split("?")[1];
  const vars = str.split('&');
  let obj = {};
  vars.forEach(item => {
    var key = item.substr(0, item.indexOf("="));
    var val = item.substr(item.indexOf("=") + 1)
    obj[key] = val;
  })
  return obj
}

export function isChinese(temp) {
  var re = /[^\u4E00-\u9FA5]/;
  if (re.test(temp)) return false;
  return true;
}


export function getCurrentPosition(cb) {
  const qq = window.qq;
  var geolocation = new qq.maps.Geolocation();
  geolocation.getIpLocation((position) => {
    if (position) {
      const {
        city
      } = position;
      cb(city)
    } else {
      cb(null)
    }
  });
}