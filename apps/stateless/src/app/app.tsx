import { ButtonComponent } from '@bdosa-agi/ui-components';
import { InputComponent } from '../../../../libs/ui-components/src/lib/input.component';
import { useState } from 'react';

export default () => {
  const [inputUserName, setInputUserName] = useState('');

  const [storedUserName, setStoredUserName] = useState('');

  const login = () => {
    setStoredUserName(inputUserName);
  };

  const logout = () => {
    setStoredUserName('');
  };

  return (
    <div className="p-5">
      {storedUserName ? (
        <>
          <div className="mr-4 inline">{storedUserName}</div>
          <ButtonComponent label="logout" onClick={() => logout()} />
        </>
      ) : (
        <>
          <div className="mr-4 inline">
            <ButtonComponent label="log in as" onClick={() => login()} />
          </div>
          <InputComponent label="user name" onChange={setInputUserName} />
        </>
      )}
    </div>
  );
};
