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

import { LabeledAction } from './types';

const ACTION_BUTTON_CONTAINER_ID = 'action-button-container';

export function drawActionsButtons(labeledActions: LabeledAction[]) {
  console.log('drawActionsButtons', labeledActions);
  if (labeledActions.length > 0) {
    drawActionsButtonsNonEmpty(labeledActions);
  } else {
    drawActionsButtonsEmpty();
  }
}

export function drawError(msg: string) {
  const actionButtonContainer = resetActionButtonContainer();
  actionButtonContainer.innerText = msg;
  actionButtonContainer.classList.add('error-msg');
  document.body.appendChild(actionButtonContainer);
}

function resetActionButtonContainer() {
  const oldActionButtonContainer = document.getElementById(
    ACTION_BUTTON_CONTAINER_ID
  );
  if (oldActionButtonContainer && oldActionButtonContainer.parentElement) {
    oldActionButtonContainer.parentElement.removeChild(
      oldActionButtonContainer
    );
  }

  const actionButtonContainer = document.createElement('div');
  actionButtonContainer.id = ACTION_BUTTON_CONTAINER_ID;

  return actionButtonContainer;
}

function drawActionsButtonsEmpty() {
  drawError('No actions available');
}

function drawActionsButtonsNonEmpty(labeledActions: LabeledAction[]) {
  const actionButtonContainer = resetActionButtonContainer();

  const actionButtons = labeledActions.map(createActionButton);
  for (const actionButton of actionButtons) {
    actionButtonContainer.appendChild(actionButton);
  }

  document.body.appendChild(actionButtonContainer);
}

function createActionButton(labeledAction: LabeledAction) {
  const actionButton = document.createElement('button');
  actionButton.innerText = labeledAction.label;
  actionButton.title = labeledAction.tooltip;
  actionButton.addEventListener('click', labeledAction.action);
  actionButton.classList.add('action-button');
  return actionButton;
}
