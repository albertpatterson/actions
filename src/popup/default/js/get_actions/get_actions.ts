import { TabDetails } from '../../../../messaging/message_systems/get_active_tab_details/types';
import { LabeledAction } from '../types';
import { getVideoActions } from './get_video_actions';
export function getActions(tabDetails: TabDetails) {
  const actions: LabeledAction[] = [];

  if (tabDetails.hasVideo) {
    actions.push(...getVideoActions());
  }

  return actions;
}
