import * as React from 'react'

import {View, Button, Text, TextInput, StyleSheet} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './store'

import { decrement,increment, incrementByInput } from './counterSlice'



export default function ReduxMain(){

    const [inputCount, setInputCount] = React.useState("2")

    const countFromStore = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
    
    const incrementCount = ()=>{
        dispatch(increment())
    }

    const decrementCount = ()=>{
        dispatch(decrement())
    }

    const incrementByInputValue =()=>{
        // dispatch(incrementByInput(parseInt(inputCount)))
        // console.log(store.getState())
        // console.log(typeof(Number(inputCount)))
        dispatch(incrementByInput(Number(inputCount)))
    }

    return(
        <View>
            <Text>Redux ToolKit Counter Example</Text>
            <Button
                title= "increment count"
                onPress={incrementCount}/>
            <Text>count from store {countFromStore}</Text>
            <Button
                title= 'decrement count'
                onPress={decrementCount}/>
            <TextInput
                style={styles.input}
                value={inputCount}
                onChangeText ={text => setInputCount(text)}
                keyboardType= "numeric"
                />

            <Button
                title='Increment Count by Input value'
                onPress={incrementByInputValue}/>    

           <Text>{inputCount}</Text>
        </View>
    ) 
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
