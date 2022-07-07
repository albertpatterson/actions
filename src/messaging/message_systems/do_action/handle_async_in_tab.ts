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

/**
 * Update this function to contain the logic run in the tab when this request type is recieved.
 */

import { DoActionRequestData, DoActionRequestResponseData } from './types';
import { Request, ResponseResult } from '../../framework/types';
import { fullActionSet } from '../../../actions';

export async function handleAsyncInTab(
  request: Request<DoActionRequestData>,
  sender: chrome.runtime.MessageSender
): Promise<ResponseResult<DoActionRequestResponseData>> {
  const actionName = request.data.actionName;
  const tabDetails = request.data.tabDetails;

  console.log(
    `Handled do action Request with name "${actionName}" on tab with title "${document.title}"`
  );

  const action = fullActionSet[actionName];
  if (!action) {
    return {
      succeeded: false,
      data: {
        error: `no action with name ${actionName}`,
      },
    };
  }

  const result = (await action.tabFcn(tabDetails)) || undefined;

  console.log(`returning successful result in tab with result "${result}"`);

  return {
    succeeded: true,
    data: {
      result,
    },
  };
}
