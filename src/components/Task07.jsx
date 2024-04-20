import React from 'react';
import { useRecoilValue } from 'recoil';

import { asyncNotifications } from '../store/atoms/asyncNotifications.js';
import { asyncTotalNotifications } from '../store/selectors/asyncTotalNotifications.js';

const Task07 = () => {
  const notifications = useRecoilValue(asyncNotifications);
  const totalNotifications = useRecoilValue(asyncTotalNotifications);

  return (
    <>
      <button>Home</button>
      <button>
        My Network {notifications.network >= 99 ? '99+' : notifications.network}
      </button>
      <button>Jobs {notifications.jobs}</button>
      <button>Messaging {notifications.messaging}</button>
      <button>Notifications {notifications.notifications}</button>
      <button>Me {totalNotifications}</button>
    </>
  );
};

export default Task07;
