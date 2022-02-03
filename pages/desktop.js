import React from 'react';
import Desktop from '../components/Desktop';
import MainPanel from '../components/MainPanel';

function desktop() {
  return (
    <div>
      <Desktop />

      <MainPanel className={"top-[59px] left-4 sm:left-10 relative"} src={"https://giffiles.alphacoders.com/315/315.gif"}/>
    </div>
  );
}

export default desktop;
