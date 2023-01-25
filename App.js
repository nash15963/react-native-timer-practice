import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Pressable ,TouchableHighlight } from 'react-native';



export default function App() {

  const [second, setSecond] = useState(0)
  const [timeTurn, setTimeTurn] = useState(false)

  useEffect(()=>{
    if(!timeTurn) return ;

    let timer = setInterval(()=>{
      setSecond(prev => prev+1)
    } ,1000)

    return ()=>clearInterval(timer)
    
  },[timeTurn])

  const handleStart =()=>{
    !timeTurn ? setTimeTurn(true) : setTimeTurn(false)

  }
  const handleRefesh =()=>{
    if(!timeTurn){
      setSecond(0)
    }
  }

    const checkTwoDigits = (t) => {
    if (t < 10) {
      return "0" + t;
    }
    return t;
  };

  const readTime =(t)=>{
    const min = Math.floor(t/60)
    const sec = t - (min*60)
    
    return `${checkTwoDigits(min)} : ${checkTwoDigits(sec)}`
  }

  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.timeNumber}>{readTime(second)}</Text>
      </View>
      
      <View style={styles.parentButton}>
      <Pressable style={styles.Button} onPress={handleStart}>
        <Text style={styles.text}>START/STOP</Text>
      </Pressable>

      <Pressable style={styles.Button} onPress={handleRefesh}>
        <Text style={styles.text}>REFRESH</Text>
      </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeNumber : {
    color : 'white' ,
    fontSize : 100
  } ,
  parentButton:{
    flexDirection: 'row' 
  } ,
  Button :{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    margin : 20
  } ,
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
