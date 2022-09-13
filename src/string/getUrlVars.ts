
export function getUrlVars(strUrl) {
  const vars = {};
  let hash;
  const url = strUrl || window.location.href;
  // if (url.indexOf('#') >= 0) {
  //     url = url.slice(0, url.indexOf('#'));
  // }
  if (url.indexOf('?') === -1) return vars;
  const str = url.split('?')[1];
  const hashes = str.split('&');
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    const key = hash[0];
    let value = '';
    try {
      value = decodeURIComponent(hash[1]);
    } catch (e) {
      // ！！！如果有非法字符 那么先使用encodeURIComponent
      value = '';
    }
    if (value && value.indexOf('[') >= 0 && value.indexOf(']') >= 0) {
      try {
        vars[key] = JSON.parse(value);
      } catch (e) {
        // console.error('getUrlVars err：', e);
      }
    } else {
      vars[key] = value;
    }
  }
  return vars;
}
