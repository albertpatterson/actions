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

import { ActionLabels } from './types';

const CONTAINER_ID = 'container';
const ACTION_BUTTON_CONTAINER_ID = 'action-button-container';

export function drawActionsButtons(
  labeledActions: ActionLabels[],
  doAction: (actionName: string) => void
) {
  console.log('drawActionsButtons', labeledActions);
  if (labeledActions.length > 0) {
    drawActionsButtonsNonEmpty(labeledActions, doAction);
  } else {
    drawActionsButtonsEmpty();
  }
}

function getContainer() {
  return document.getElementById(CONTAINER_ID)!;
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
  showMessage('No actions available', true);
}

function drawActionsButtonsNonEmpty(
  actionLabels: ActionLabels[],
  doAction: (actionName: string) => void
) {
  const actionButtonContainer = resetActionButtonContainer();

  const actionButtons = actionLabels.map((actionLabel) =>
    createActionButton(actionLabel, doAction)
  );
  for (const actionButton of actionButtons) {
    actionButtonContainer.appendChild(actionButton);
  }

  getContainer().appendChild(actionButtonContainer);
}

function createActionButton(
  actionLabel: ActionLabels,
  doAction: (actionName: string) => void
) {
  const actionButton = document.createElement('button');
  actionButton.innerText = actionLabel.label;
  actionButton.title = actionLabel.tooltip;
  actionButton.addEventListener('click', () =>
    doAction(actionLabel.actionName)
  );
  actionButton.classList.add('action-button');
  return actionButton;
}

export function showMessage(msg: string, isError = false) {
  const container = getContainer();
  if (!container) {
    throw new Error('no container');
  }

  const message = document.createElement('p');
  message.classList.add('message');
  if (isError) {
    message.classList.add('error');
  }
  message.innerText = msg;
  container.appendChild(message);

  return () => container.removeChild(message);
}

export function showToast(msg: string, isError = false) {
  const removeMessage = showMessage(msg, isError);

  setTimeout(() => {
    removeMessage();
  }, 5e3);
}
