import React, { useState } from 'react';
import Task01 from './Task01';
import Task02 from './Task02';
import Task03 from './Task03';
import Task04 from './Task04';
import Task05 from './Task05';
import { RecoilRoot } from 'recoil';
import Task06 from './Task06';
import Task07 from './Task07';
import Task08 from './Task08';
import Task09 from './Task09';
import Task10 from './Task10';

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
      {/* <Task02 /> */}
      {/* <Task03 /> */}
      {/* <Task04 /> */}
      <RecoilRoot>
        {/* <Task05 /> */}
        {/* <Task06 /> */}
        {/* <Task07 /> */}
        {/* <Task08 /> */}
        {/* <Task09 /> */}
        <Task10 />
      </RecoilRoot>
    </>
  );
};

export default DashboardPage;
