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

import '../scss/styles.scss';
import { LabeledAction } from './types';
import { drawActionsButtons } from './view';
import {
  messageSystem,
  createRequest,
} from '../../../messaging/message_systems/youtube_action/message_system';
import { Action } from '../../../messaging/message_systems/youtube_action/types';

function doAction(action: Action) {
  return () => {
    const request = createRequest({ action });
    messageSystem.sendInTab(request);
  };
}

const actions: LabeledAction[] = [
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

drawActionsButtons(actions);
