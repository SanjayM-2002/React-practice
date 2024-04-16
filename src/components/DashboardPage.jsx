import React, { useState } from 'react';
import Task01 from './Task01';
import Task02 from './Task02';

const DashboardPage = () => {
  return (
    <>
      <div
        style={{
          padding: 12,
          backgroundColor: 'pink',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-around',
        }}
      >
        <h2>Dashboard Page</h2>
      </div>
      {/* <Task01 /> */}
      <Task02 />
    </>
  );
};

export default DashboardPage;
