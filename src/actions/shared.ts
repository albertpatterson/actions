import { Action } from './types';

export function createAction(
  part: Pick<Action, 'label' | 'tooltip' | 'tabFcn'> & Partial<Action>
): Action {
  return {
    filter: () => true,
    handleResult: async () => null,
    ...part,
  };
}
