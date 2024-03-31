const ROUTE = {
  INTRO: {
    path: '/',
  },
  ACCOUNT: {
    LOGIN: {
      path: `/account/login`,
    },
    REGISTER: {
      path: `/account/register`,
    },
  },
  TASKS: {
    path: '/tasks',
  },
  CALENDAR: {
    path: '/calendar',
  },
  PROFILE: {
    path: '/profile',
    ACCOUNT: {
      path: `/profile/account-info`,
    },
    APP_SETTING: {
      path: '/profile/app-setting',
    },
  },
};

export default ROUTE;
