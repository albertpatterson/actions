import { skip as utilSkip } from '../../video/utils';

import { context } from '../../context';

export function skip() {
  if (context.hasVidSkipInterval()) {
    context.clearVidSkipInterval();
  } else {
    utilSkip(context, 10);
  }
}
