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
export interface YoutubeActionRequestData {
  action: Action;
}

/**
 * The type of data passed with the response
 */
export interface YoutubeActionRequestResponseData {}
