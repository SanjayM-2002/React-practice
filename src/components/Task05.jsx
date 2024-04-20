import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationsAtom,
} from '../store/atoms/appbar';
import { totalNotifications } from '../store/selectors/totalNotifications';

const Task05 = () => {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagesCount = useRecoilValue(messagesAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  /*
    Displaying total notifictions using useMemo
    const sumOfNotifications = useMemo(() => {
    return networkCount + jobsCount + messagesCount + notificationsCount;
  }, [networkCount, jobsCount, messagesCount, notificationsCount]);
  */

  const totalNotificationsValue = useRecoilValue(totalNotifications);
  return (
    <>
      <button>Home</button>
      <button>My Network {networkCount >= 100 ? '99+' : networkCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messagesCount}</button>
      <button>Notifications {notificationsCount}</button>
      <button>Me {totalNotificationsValue}</button>
    </>
  );
};

export default Task05;
