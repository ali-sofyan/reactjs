import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  Title,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import { cartItemsVar } from "../apollo/resolver";



const Product_Detail = gql`
  query Product($id: String!) {
		products(filter: { url_key: {eq: $id}}){
      items{
        id
        url_key
        name
        stock_status
        image{
          url
        }
        sku
        description{
          html
        }
        price_range{
          minimum_price{
            final_price{
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const Detail = ({ route, navigation }) => {
  const { id, name, price, img } = route.params
  const [count, setCount] = useState(1);

  const response = useQuery(Product_Detail, {
    variables: { id: id },
  });

  const {loading, error, data } = response;

  if (loading) return <><ActivityIndicator size="large" /><Text>Loading ...</Text></>;

  const item = data.products.items;


  // local state apollo
  const cartItems = cartItemsVar();
  const itemCart = [
    {
      id: item[0].id,
      name: item[0].name,
      price: item[0].price_range.minimum_price.final_price.value.toFixed(2),
      img: item[0].image.url,
      qty: count,
      isDiscount: false
    }
  ];
  //
  
  return (
    <ScrollView vertical>
      <View style={{ padding: 20 }}>
        <Image source={{uri: item[0].image.url}} style={{ width: '100%', height: 450 }}/>
        
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>{item[0].name}</Text>

        <Text style={{ fontWeight: "500", fontSize: 10, color: "#333" }}>{item[0].stock_status}</Text>

        <Text style={{ fontWeight: "600", fontSize: 10, color: "#333" }}>SKU : # {item[0].sku}</Text>
        
        <Text style={{ fontWeight: "700", fontSize: 20, color: "red", marginTop: 5 }}>
            {`${
              item[0].price_range.minimum_price.final_price.currency
            } ${item[0].price_range.minimum_price.final_price.value.toFixed(
              2
            )}`}
        </Text>
        
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={{ padding: 5 }}>Qty</Text>

          <TouchableHighlight onPress={() => setCount(count - 1)}>
            <View style={styles.buttonQty}>
              <Text>-</Text>
            </View>
          </TouchableHighlight>

          <TextInput style={{ borderColor: "#000000", borderWidth: 1, padding: 5, textAlign: "center" }}>{count} </TextInput>

          <TouchableHighlight onPress={() => setCount(count + 1)}>
            <View style={styles.buttonQty}>
              <Text>+</Text>
            </View>
          </TouchableHighlight>

        </View>
        
        <Button
            color="#FA8072"
            title="Add to cart"
            onPress={() => {
              if (count < 1 ){
                alert("Qty tidak boleh kurang dari 1")
              }else{
                cartItemsVar([...cartItems, ...itemCart]);
                navigation.navigate('Cart');
              }
            }}  
        />
        
        <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 10 }}>Detail</Text>
        <View style={{ borderTopColor: "#000000", borderTopWidth: 1 }}>
          {/* <Text>{item[0].description.html}</Text> */}
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  buttonQty: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default Detail