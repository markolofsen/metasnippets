/* Usage

// hooks
import {useHelpers} from 'hooks/'

function demo() {
  const helpers = useHelpers();

  return (
    helpers.format.formatMoney(10000, '$')
    helpers.format.formatNumber({
      value: 33,
      decimal: 2,
      addon: '',
      separator: ',',
    })
  )
}


*/

// hooks
// import { default as format } from './FormatClass';
import { default as custom } from './CustomClass';
import { default as array } from './ArrayClass';

export default {
  // format,
  custom,
  array,
}
