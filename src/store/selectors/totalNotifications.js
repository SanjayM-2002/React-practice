import { selector } from 'recoil';
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationsAtom,
} from '../atoms/appbar';

export const totalNotifications = selector({
  key: 'totalNotifications',
  get: ({ get }) => {
    const networkValue = get(networkAtom);
    const jobsValue = get(jobsAtom);
    const messagesValue = get(messagesAtom);
    const notificationsValue = get(notificationsAtom);
    return networkValue + jobsValue + messagesValue + notificationsValue;
  },
});
