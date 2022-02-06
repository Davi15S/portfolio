import React from 'react';
import Desktop from '../components/Desktop';
import MainPanel from '../components/MainPanel';

function desktop() {
  return (
    <div>
      <Desktop />

      <MainPanel vscode="/vscode" chrome="/chrome" csgo="/csgo"/>
    </div>
  );
}

export default desktop;
