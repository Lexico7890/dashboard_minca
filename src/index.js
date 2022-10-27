import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

import './index.css'
import App from './App'
import { ContextProvider } from './contexts/ContextProvider'

ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>, 
    document.getElementById('root'),
)