import React from 'react'
import Amplify from 'aws-amplify'
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import config from '../aws-exports'
import Feeder from './Feeder'
import { Auth, Hub } from 'aws-amplify';
import {CustomSignOutButton} from './CustomSignOutButton'

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
function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(authReducer, initialState)

  React.useEffect(() => {
    //this will fire anytime a user switches auth scenarios
    // https://docs.amplify.aws/ui/auth/authenticator/q/framework/react#methods--enums
    onAuthUIStateChange((nextAuthState, data) => {
      dispatch({
        type: 'authStateChange',
        authStage: nextAuthState,
        user: data,
      })
    })
  }, [])

  return state.authStage === AuthState.SignedIn && state.user ? (
    <>
      <Feeder/>
    </>
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
