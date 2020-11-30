/**
 * 复制内容到剪切板
 * @param value
 */

const copyToClipboard = (value: string): boolean => {
  const bool: boolean = document.execCommand('copy');
  if (!bool) {
    console.warn('您的浏览器不支持 document.execCommand');
    return false;
  }
  const input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', value);
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 9999);
  document.execCommand('copy');
  document.body.removeChild(input);
  return true;
};

export default copyToClipboard;
