/**
 * @file
 * @author Albert Patterson <albert.patterson.code@gmail.com>
 * @see [Linkedin]{@link https://www.linkedin.com/in/apattersoncmu/}
 * @see [Github]{@link https://github.com/albertpatterson}
 * @see [npm]{@link https://www.npmjs.com/~apatterson189}
 * @see [Youtube]{@link https://www.youtube.com/channel/UCrECEffgWKBMCvn5tar9bYw}
 * @see [Medium]{@link https://medium.com/@albert.patterson.code}
 *
 * Free software under the GPLv3 licence. Permissions of this strong copyleft
 * license are conditioned on making available complete source code of
 * licensed works and modifications, which include larger works using a
 * licensed work, under the same license. Copyright and license notices must
 * be preserved. Contributors provide an express grant of patent rights.
 */

import {
  YoutubeActionRequestData,
  Action,
  YoutubeActionRequestResponseData,
} from './types';
import { Request, ResponseResult } from '../../framework/types';
import { goBack } from './actions/go_back/go_back';
import { goForward } from './actions/go_forward/go_forward';
import { slowDown } from './actions/slow_down/slow_down';
import { speedUp } from './actions/speed_up/speed_up';
import { skip } from './actions/skip/skip';
import { setSpeeds } from './actions/set_speeds/set_speeds';
import { context } from './context';

export async function handleAsyncInTab(
  request: Request<YoutubeActionRequestData>,
  sender: chrome.runtime.MessageSender
): Promise<ResponseResult<YoutubeActionRequestResponseData>> {
  performAction(request.data.action);

  return {
    succeeded: true,
    data: {},
  };
}

function performAction(action: Action): Promise<void> {
  // ensure exhaustive action handling to avoid error "Function lacks ending return statement and return type does not include 'undefined'."
  switch (action) {
    case Action.BACK:
      goBack();
      return Promise.resolve();
    case Action.FORWARD:
      goForward();
      return Promise.resolve();
    case Action.SLOW:
      slowDown();
      return Promise.resolve();
    case Action.FAST:
      speedUp();
      return Promise.resolve();
    case Action.SKIP:
      skip();
      return Promise.resolve();
    case Action.SPEED_1:
      setSpeeds(context, 1);
      return Promise.resolve();
    case Action.SPEED_3:
      setSpeeds(context, 3);
      return Promise.resolve();
    case Action.SPEED_4:
      setSpeeds(context, 4);
      return Promise.resolve();
  }
}
