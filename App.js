import * as React from 'react'

import { Provider } from 'react-redux'

import ReduxMain from './ReduxMain'
import { store } from './store'



export default function App(){
    return(
        <Provider store={store}>
            <ReduxMain/>
        </Provider>
      
    )
}
