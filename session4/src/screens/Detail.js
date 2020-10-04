import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  Title
} from 'react-native';

const Detail = ({ route, navigation }) => {
  const { id, name, price, img } = route.params
  const [count, setCount] = useState(0);

  return (
    <ScrollView vertical>
      <View style={{ padding: 20 }}>
        <Image source={{uri: img}} style={{ width: '100%', height: 350 }}/>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>{name}</Text>
        <Text style={{ fontWeight: "600", fontSize: 18, color: "red" }}>{price}</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={{ padding: 5 }}>Qty</Text>
          <TextInput style={{ borderColor: "#000000", borderWidth: 1, padding: 5 }}>1</TextInput>
        </View>
        <Button
            color="#FA8072"
            title="Add to cart"
            onPress={() => navigation.navigate('Cart')}  
          />
        <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 10 }}>Detail</Text>
        <View style={{ borderTopColor: "#000000", borderTopWidth: 1 }}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Detail