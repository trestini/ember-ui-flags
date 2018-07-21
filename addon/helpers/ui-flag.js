import { helper } from '@ember/component/helper';
import htmlSafe from '@ember/templates';

export function uiFlag(params) {
  const country = params[0] || params[0].toUpperCase();
  const html = `<i class="flag-sm flag-sm-${country}></i>`;
  return htmlSafe(html);
}

export default helper(uiFlag);
