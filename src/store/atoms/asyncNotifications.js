import { atom, selector } from 'recoil';

export const asyncNotifications = atom({
  key: 'asyncNotifications',
  default: selector({
    key: 'asyncNotificationSelector',
    get: async () => {
      const res = await fetch('https://sum-server.100xdevs.com/notifications');
      const data = await res.json();
      console.log('data in atom is: ', data);
      return data;
    },
  }),
});
