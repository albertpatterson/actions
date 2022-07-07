import { TabDetails } from '../messaging/message_systems/get_active_tab_details/types';

export interface Action {
  label: string;
  tooltip: string;
  tabFcn: (tabDetails: TabDetails) => Promise<string | void>;
  filter: (tabDetails: TabDetails) => boolean;
  handleResult: (
    result?: string
  ) => Promise<{ message: string; isError: boolean } | null>;
}

export type ActionSet = { [name: string]: Action };
