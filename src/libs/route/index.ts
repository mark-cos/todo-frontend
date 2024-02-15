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
  MAIN: {
    path: '/main',
    PROFILE: {
      path: `/main/profile`,
    },
    TASKS: {
      path: `/main/tasks`,
    },
  },
};

export default ROUTE;
