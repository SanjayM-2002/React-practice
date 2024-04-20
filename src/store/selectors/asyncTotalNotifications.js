import { selector } from 'recoil';
import { asyncNotifications } from '../atoms/asyncNotifications';

export const asyncTotalNotifications = selector({
  key: 'asyncTotalNotifications',
  get: ({ get }) => {
    const notifications = get(asyncNotifications);
    return (
      notifications.network +
      notifications.jobs +
      notifications.messaging +
      notifications.notifications
    );
  },
});
