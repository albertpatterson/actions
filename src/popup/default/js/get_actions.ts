import { TabDetails } from '../../../messaging/message_systems/get_active_tab_details/types';
import { LabeledAction } from './types';
import {
  messageSystem as videoActionMessageSystem,
  createRequest as videoActionCreateRequest,
} from '../../../messaging/message_systems/youtube_action/message_system';
import { Action } from '../../../messaging/message_systems/youtube_action/types';

function doAction(action: Action) {
  return () => {
    const request = videoActionCreateRequest({ action });
    videoActionMessageSystem.sendInTab(request);
  };
}

const videoActions: LabeledAction[] = [
  { label: '<-', tooltip: 'Go back 10s', action: doAction(Action.BACK) },
  { label: '->', tooltip: 'Go Forwrd 10s', action: doAction(Action.FORWARD) },
  { label: '->->', tooltip: 'Skip by 10s', action: doAction(Action.SKIP) },
  {
    label: '<<',
    tooltip: 'Reduce speed by 0.5',
    action: doAction(Action.SLOW),
  },
  {
    label: '>>',
    tooltip: 'Increase speed by 0.5',
    action: doAction(Action.FAST),
  },
  { label: '1', tooltip: 'Set speed to 1', action: doAction(Action.SPEED_1) },
  { label: '3', tooltip: 'Set speed to 3', action: doAction(Action.SPEED_3) },
  { label: '4', tooltip: 'Set speed to 4', action: doAction(Action.SPEED_4) },
];

export function getActions(tabDetails: TabDetails) {
  const actions: LabeledAction[] = [];

  if (tabDetails.hasVideo) {
    actions.push(...videoActions);
  }

  return actions;
}
