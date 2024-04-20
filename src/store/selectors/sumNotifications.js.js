import { selector } from 'recoil';
import { notificationsData } from '../atoms/notificationsData';

export const sumNotifications = selector({
  key: 'sumNotifications',
  get: ({ get }) => {
    const notifications = get(notificationsData);
    return (
      notifications.network +
      notifications.jobs +
      notifications.messaging +
      notifications.notifications
    );
  },
});
