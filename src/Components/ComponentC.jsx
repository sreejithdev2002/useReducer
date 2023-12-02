import React, {useContext} from 'react';
import { userContext, passwordContext } from '../App';

function ComponentC() {

    
    const username = useContext(userContext);
    const password = useContext(passwordContext);


  return (
    <div className='compC'>
      <h1>Name = {username}</h1>
      <h1>Password = {password}</h1>
    </div>
  )
}

export default ComponentC
