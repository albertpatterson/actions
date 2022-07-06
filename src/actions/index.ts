import { TabDetails } from '../messaging/message_systems/get_active_tab_details/types';
import { ActionSet } from './types';
import { action as videoGoBackAction } from './video/actions/go_back/go_back';
import { action as videoGoForwardAction } from './video/actions/go_forward/go_forward';
import { getActions as getVideoSetSpeedsActions } from './video/actions/set_speeds/set_speeds';
import { context } from './video/context';
import { getAction as getVideoSlowDownAction } from './video/actions/slow_down/slow_down';
import { getAction as getVideoSpeedUpAction } from './video/actions/speed_up/speed_up';
import { getAction as getVideoSkipAction } from './video/actions/skip/skip';

const videoSetSpeedActions = getVideoSetSpeedsActions(context);

export const fullActionSet: ActionSet = {
  videoGoBack: videoGoBackAction,
  videoGoForward: videoGoForwardAction,
  videoSkip: getVideoSkipAction(context),
  videoSetSpeed1: videoSetSpeedActions.setSpeed1,
  videoSetSpeed3: videoSetSpeedActions.setSpeed3,
  videoSetSpeed4: videoSetSpeedActions.setSpeed4,
  videoSlowDown: getVideoSlowDownAction(context),
  videoSpeedUp: getVideoSpeedUpAction(context),
};

export function getActionSet(tabDetails: TabDetails) {
  const actions: ActionSet = {};
  for (const actionName in fullActionSet) {
    if (fullActionSet[actionName].filter(tabDetails)) {
      actions[actionName] = fullActionSet[actionName];
    }
  }

  return actions;
}
