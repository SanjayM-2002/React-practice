import { atom } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 102,
});
export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 5,
});
export const messagesAtom = atom({
  key: 'messagesAtom',
  default: 10,
});
export const notificationsAtom = atom({
  key: 'notificationsAtom',
  default: 18,
});
