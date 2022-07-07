import { TabDetails } from '../../messaging/message_systems/get_active_tab_details/types';
import { ActionSet } from '../types';
import { action as videoGoBackAction } from './actions/go_back/go_back';
import { action as videoGoForwardAction } from './actions/go_forward/go_forward';
import { getActions as getVideoSetSpeedsActions } from './actions/set_speeds/set_speeds';
import { context } from './context';
import { getAction as getVideoSlowDownAction } from './actions/slow_down/slow_down';
import { getAction as getVideoSpeedUpAction } from './actions/speed_up/speed_up';
import { getAction as getVideoSkipAction } from './actions/skip/skip';

const videoSetSpeedActions = getVideoSetSpeedsActions(context);

export const actionSet: ActionSet = {
  videoGoBack: videoGoBackAction,
  videoGoForward: videoGoForwardAction,
  videoSkip: getVideoSkipAction(context),
  videoSetSpeed1: videoSetSpeedActions.setSpeed1,
  videoSetSpeed3: videoSetSpeedActions.setSpeed3,
  videoSetSpeed4: videoSetSpeedActions.setSpeed4,
  videoSlowDown: getVideoSlowDownAction(context),
  videoSpeedUp: getVideoSpeedUpAction(context),
};
