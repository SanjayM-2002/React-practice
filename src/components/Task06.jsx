import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { notificationsData } from '../store/atoms/notificationsData';
import { sumNotifications } from '../store/selectors/sumNotifications.js';

const Task06 = () => {
  const [notifications, setNotifications] = useRecoilState(notificationsData);
  const sumOfNotifications = useRecoilValue(sumNotifications);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://sum-server.100xdevs.com/notifications');
      const data = await res.json();
      console.log('data is: ', data);
      setNotifications(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <button>Home</button>
      <button>
        My Network {notifications.network >= 99 ? '99+' : notifications.network}
      </button>
      <button>Jobs {notifications.jobs}</button>
      <button>Messaging {notifications.messaging}</button>
      <button>Notifications {notifications.notifications}</button>
      <button>Me {sumOfNotifications}</button>
    </>
  );
};

export default Task06;
