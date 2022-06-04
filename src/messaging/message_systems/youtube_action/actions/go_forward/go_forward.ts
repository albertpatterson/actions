import { incrementTime } from '../../video/utils';
import { context } from '../../context';

export function goForward() {
  incrementTime(context, 10);
}
