import React, { useContext, useEffect } from 'react';

import { MainContext } from '../context';

function WarningMessage() {
  const { warningMessage, setWarningMessage } = useContext(MainContext);

  useEffect(() => {
    const TIME_LIMIT = 3000;
    setTimeout(() => {
      setWarningMessage('');
    }, TIME_LIMIT);
  }, [setWarningMessage]);

  return (
    <div className='warning-message'>
      <span>{warningMessage}</span>
    </div>
  );
}

export default WarningMessage;
