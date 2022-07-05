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
 * Update these types for each type of request
 */

/** the name of the type of request (must be unique) */
export const NAME = 'youtube action request';

/** the types of actions that can be performed */
export enum Action {
  BACK,
  FORWARD,
  SKIP,
  SLOW,
  FAST,
  SPEED_1,
  SPEED_3,
  SPEED_4,
}

/**
 * The type of data passed with the request
 */
export interface VideoActionRequestData {
  action: Action;
}

/**
 * The type of data passed with the response
 */
export interface VideoActionRequestResponseData {}
