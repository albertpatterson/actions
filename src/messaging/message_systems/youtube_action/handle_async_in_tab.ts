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
