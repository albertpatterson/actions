import { TabDetails } from '../../messaging/message_systems/get_active_tab_details/types';

interface Action {
  label: string;
  tooltip: string;
  tabFcn: (tabDetails: TabDetails) => string | void;
  filter: (tabDetails: TabDetails) => boolean;
  handleResult: (result: string) => string | null;
}

export const actions: { [name: string]: Action } = {
  videoGoBack: {
    label: '<-_______',
    tooltip: 'Go back 10 seconds',
    tabFcn: () => {
      console.log('going back');
      return 'i went back!';
    },
    filter: () => true,
    handleResult: (result: string) => {
      console.log(`handling result ${result}`);
      return ' did logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid logdid log';
    },
  },

  videoGoBack2: {
    label: '<-_______',
    tooltip: 'Go back 10 seconds',
    tabFcn: () => {
      console.log('going back');
      return 'i went back!';
    },
    filter: () => true,
    handleResult: (result: string) => {
      console.log(`handling result ${result}`);
      return 'did log';
    },
  },

  // videoGoBack3: {
  //   label: '<-_____1__',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack4: {
  //   label: '<-____2___',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack5: {
  //   label: '<-____3___',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack6: {
  //   label: '<-_____4__',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack7: {
  //   label: '<-_____5__',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack8: {
  //   label: '<-____6___',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack9: {
  //   label: '<-____7___',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack10: {
  //   label: '<-___8____',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack11: {
  //   label: '<-___9____',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack12: {
  //   label: '<-_____10__',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack13: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack14: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack15: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack16: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack17: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack18: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack19: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },

  // videoGoBack20: {
  //   label: '<-_______',
  //   tooltip: 'Go back 10 seconds',
  //   tabFcn: () => {
  //     console.log('going back');
  //     return 'i went back!';
  //   },
  //   filter: () => true,
  //   handleResult: (result: string) => {
  //     console.log(`handling result ${result}`);
  //     return 'did log';
  //   },
  // },
};
