import React from 'react';
import CSGO from '../components/CSGO';
import MainPanel from '../components/MainPanel';

function csgo() {
    return (
      <div>
          <CSGO />
          <MainPanel vscode="/vscode" chrome="/chrome" csgo="/desktop"/>
      </div>
    );
}

export default csgo;
