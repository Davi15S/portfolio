import React from 'react';
import Chrome from '../components/Chrome';
import MainPanel from '../components/MainPanel';

function chrome() {
  return(
      <div>
          <Chrome />

          <MainPanel vscode="/vscode" chrome="/desktop" csgo="/csgo"/>
      </div>
  );
}

export default chrome;
