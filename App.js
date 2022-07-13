import * as React from 'react'

import { Provider } from 'react-redux'

import ReduxMain from './ReduxToolkit/ReduxMain'
import { store } from './ReduxToolkit/store'



export default function App(){
    return(
        <Provider store={store}>
            <ReduxMain/>
        </Provider>
      
    )
}
