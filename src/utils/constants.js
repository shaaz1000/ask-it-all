// APP ROUTES
export const HOMEPAGE = '/';
export const LOGIN = `/login`;
export const SIGNUP = `/signup`;
export const TERMS_AND_CONDITIONS = `/terms`;
export const BOOKINGS = `/bookings`;
export const PAYMENT = `/payment`;
export const HISTORY = `/history`;
export const REPORT = `/report`;
export const PROFILE = `/profile`;

export const pageMapper = {
    [PROFILE]: 0,
    [BOOKINGS]: 1,
    [PAYMENT]: 2,
    [HISTORY]: 3,
    [REPORT]: 4
}

export const mockInstructorData = [
    {
      name: "Prashant Kumar Singh",
      date: "25/02/2023",
      category: "FRONTEND",
      concept: "Understanding concept of React",
      actions: () => console.log("Show details clicked"),
    },
    {
      name: "Prashant Kumar Singh",
      date: "25/02/2023",
      category: "BACKEND",
      concept: "Understanding concept of Python",
      actions: () => console.log("Show details clicked"),
    },
  ];