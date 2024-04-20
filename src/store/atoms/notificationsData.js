import { atom } from 'recoil';

export const notificationsData = atom({
  key: 'notificationsData',
  default: {
    network: 112,
    jobs: 5,
    messaging: 12,
    notifications: 23,
  },
});
