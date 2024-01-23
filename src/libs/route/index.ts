const getLng = () => {
  let lng = '';
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    lng = '/' + (pathname.match(/([^\/]+)/g) || [])[0];
  }
  return lng;
};

const ROUTE = {
  INTRO: {
    path: '/',
  },
  ACCOUNT: {
    LOGIN: {
      path: `${getLng()}/account/login`,
    },
    REGISTER: {
      path: `${getLng()}/account/register`,
    },
  },
  MAIN: {
    path: '/main',
    PROFILE: {
      path: `${getLng()}/main/profile`,
    },
    TASKS: {
      path: `${getLng()}/main/tasks`,
    },
  },
};

export default ROUTE;
