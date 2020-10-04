import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    Title
  } from 'react-native';

const Detail = () => {
  return (
    <ScrollView>
        <Text style={styles.titleText}>Cart Page</Text>
        <View style={{ flexDirection: 'column'}}>
            <View style={{ paddingVertical: 5, paddingHorizontal: 10, borderBottomColor: "#000", borderBottomWidth: 1}}>
                <Text style={{ fontSize: 25}}>Nama : Parfum Blue</Text>
                <Text style={{ fontSize: 18}}>Harga : $ 90</Text>
                <Text style={{ fontSize: 18}}>Qty : 1</Text>
            </View>
            <View style={{ paddingVertical: 5, paddingHorizontal: 10, borderBottomColor: "#000", borderBottomWidth: 1}}>
                <Text style={{ fontSize: 25}}>Nama : Jam Tangan Eva</Text>
                <Text style={{ fontSize: 18}}>Harga : $ 51</Text>
                <Text style={{ fontSize: 18}}>Qty : 1</Text>
            </View>
            <View style={{ marginTop: 100}}>
            <Button
            color="#FA8072"
            title="Add to cart"
            onPress={() => alert('Checkout Berhasil!')}  
          />
            </View>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    titleText: {
      width: "100%",
      textAlign: "center",
      paddingBottom: 15,
      paddingTop: 10,
      fontWeight: "700",
      fontSize: 25,
      backgroundColor: '#FED7B9',
      color: '#fff',
      marginBottom: 20
    }
  });
export default Detail