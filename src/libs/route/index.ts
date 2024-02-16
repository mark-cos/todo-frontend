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
  PROFILE: {
    path: '/profile',
    account: {
      path: `/profile/account`,
    },
  },
};

export default ROUTE;
