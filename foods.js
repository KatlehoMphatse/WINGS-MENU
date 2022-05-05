import { StyleSheet, Text, View, Image , Button } from 'react-native';
import React, {useState} from 'react';

export default function Foods({name,price,Amount, setAmount, image}) {
  const [cash, setCash] = useState(0);

  function Add(){
    setAmount(Amount + price)
    setCash(cash + price);
  }

  function deduct(){
    setAmount(Amount - price)
    setCash(cash + price);
    if(Amount <= 0){
      Amount += price
      setAmount(Amount)
    }
  }
  return (
    <View style={styles.Foods}>
       <Image style={styles.image}source={image}/>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text>{price}</Text>
        <Button title="+price" onPress={Add} />
        <Button title="-price" onPress={deduct} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Foods: {
    margin: 20,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  details: {
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
});