import { decrementTime } from '../../video/utils';
import { context } from '../../context';

export function goBack() {
  decrementTime(context, 10, undefined, true);
}
