import { ButtonComponent } from '@bdosa-agi/ui-components';
import { InputComponent } from '@bdosa-agi/ui-components';
import { useState } from 'react';

const localStorageKey = 'userName';

export default () => {
  const [inputUserName, setInputUserName] = useState('');

  const [storedUserName, setStoredUserName] = useState(
    localStorage.getItem(localStorageKey) ?? ''
  );

  const login = () => {
    localStorage.setItem(localStorageKey, inputUserName);
    setStoredUserName(inputUserName);
  };

  const logout = () => {
    localStorage.removeItem(localStorageKey);
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
