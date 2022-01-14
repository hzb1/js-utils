import date from './date';
import number from './number';
import document from './document';
import min from './mix';
import func from './function';

const u = {
  ...date,
  ...number,
  ...document,
  ...min,
  ...func,
};

(window as any).u = u;
export default u;
