import { TabDetails } from '../messaging/message_systems/get_active_tab_details/types';
import { ActionSet } from './types';
import { actionSet as videoActionSet } from './video';

export const fullActionSet: ActionSet = {
  ...videoActionSet,
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
