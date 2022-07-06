import { TabDetails } from '../../../../messaging/message_systems/get_active_tab_details/types';
import { ActionLabels } from '../types';
// import { getVideoActions } from './get_video_actions';
import { actions } from '../../../../actions/base';

export function getActions(tabDetails: TabDetails) {
  const actionData = [];
  for (const actionName in actions) {
    const action = actions[actionName];
    actionData.push({
      actionName,
      label: action.label,
      tooltip: action.tooltip,
    });
  }

  return actionData;

  // const actions: LabeledAction[] = [];

  // if (tabDetails.hasVideo) {
  //   actions.push(...getVideoActions());
  // }

  // return actions;
}
