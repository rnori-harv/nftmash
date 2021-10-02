import React from 'react';
import { Auth, Hub } from 'aws-amplify';
import styled from 'styled-components';



const handleSignOutButtonClick = async () => {
    try {
        await Auth.signOut();
        Hub.dispatch('UI Auth', {   // channel must be 'UI Auth'
            event: 'AuthStateChange',    // event must be 'AuthStateChange'
            message: 'signedout'    // message must be 'signedout'
        });
    } catch (error) {
        console.log('error signing out: ', error);
    }
};  

const CustomSignOutButton = () => {
    const Button = styled.button`
  background-color: #310858;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 0px 0px;
  cursor: pointer;
`;
    return (
        <Button
            colorScheme="blue"
            onClick={handleSignOutButtonClick}>
            Sign Out
        </Button>
    );
};

export {CustomSignOutButton, handleSignOutButtonClick};