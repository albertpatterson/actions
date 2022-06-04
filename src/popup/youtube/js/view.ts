import { LabeledAction } from './types';

const ACTION_BUTTON_CONTAINER_ID = 'action-button-container';

export function drawActionsButtons(labeledActions: LabeledAction[]) {
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
