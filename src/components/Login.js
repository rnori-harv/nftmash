import React from 'react'
import Amplify from 'aws-amplify'
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { withRouter, Redirect } from 'react-router'
import { Auth, appendToCognitoUserAgent } from '@aws-amplify/auth';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import config from '../aws-exports'
import Feeder from './Feeder'
import { Logger } from '@aws-amplify/core';
import {CustomSignOutButton} from './CustomSignOutButton'

const logger = new Logger('withAuthenticator');

Amplify.configure(config)

const authReducer = (state, action) => {
  switch (action.type) {
    case 'authStateChange':
      return { authStage: action.authStage, user: action.user }
    default:
      throw Error(`action ${action.type} not found.`)
  }
}

const initialState = {}
const MyApp= () =>{

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Feeder/>
  ) : (
    <>
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: 'username' },
            {
              type: "preferred_username",
              label: "We like to confirm usernames instead of passwords",
              placeholder: "Custom preferred username placeholder",
              inputProps: { required: true, autocomplete: "username" },
            },
            { type: 'email' },
            { type: 'password' },
          ]}
        />
      </AmplifyAuthenticator>
    </>
  )
}

export default MyApp