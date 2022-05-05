import { StyleSheet, Text, View, StatusBar, Image, } from 'react-native';
import {useState} from 'react';
import { ScrollView } from 'react-native';
import Foods from './foods';

export default function App() {
  const [Amount, setAmount] = useState(0);

return (
 
  
  <ScrollView>
     <StatusBar/>
    <Image source={require('./assets/download.jpg')} style = {{height: 183, width: 500}} />
    <View style={styles.container}>
     <View style={styles.header}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize: 24, justifyContent: 'center', alignItems:'center'}}>WINGS MENU</Text>
    </View>
    <View style={styles.Fooder}>
        <Text style={{fontWeight:'bold',alignItems:'center', justifyContent:'center'}}>Choose Your Favourite</Text>
        <Text style={{fontSize: 24, color:'black',fontWeight:'bold'}}>The total Amount is {Amount}</Text>
        <Foods name="Dessert" price={10}  Amount={Amount} setAmount={setAmount}image = {require('./assets/download(1).jpg')}  />
        <Foods name="Lunch" price={20} Amount={Amount} setAmount={setAmount}image = {require('./assets/download_(2).jpg')}  />
        <Foods name="Breakfast" price={15} Amount={Amount} setAmount={setAmount}  image = {require('./assets/images.jpg')}/>
        <Foods name="Dinner" price={25} Amount={Amount} setAmount={setAmount} image = {require('./assets/download.jpg')} />
       
    
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },

  header:{
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    height: 100,
    width: 400

  },
  container2:{
  
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,
  },
  Fooder: {
    flex:1,
  }
})