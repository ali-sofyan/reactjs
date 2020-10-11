import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Platform,
  Image,
  Title,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Card } from 'react-native-paper';
import {gql, useQuery} from '@apollo/client'; 

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width * 0.33 ;


const Top_Product = gql`{
  products(filter: { category_id: {eq: "45"}}){
    items{
      id
      url_key
      name
      stock_status
      image{
        url
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
}`;

const Banner_Home = gql`{
  getHomepageSlider{
    images{
      mobile_image_url
    }  
  }
}`;


const Home = ({ navigation }) => {
  const [categories, setCategories] = useState();
  const [sale, setSale] = useState();
  const { loading, error, data } = useQuery(Top_Product);


  if(data === undefined ) { return ( <Text>Data Product Tidak ditemukan</Text>)}
  const product = data.products.items;
  return (
    <ScrollView vertical>
      <View>
          <Banner/>
      </View>
      <View>
          <Text style={styles.titleText}>Top Product</Text>
          <ScrollView horizontal>
          {product.map((item, key) => {
              return (
                <View key={key} style={styles.card}>
                  <Card style={{ paddingBottom: 10, height: 220 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                    { 
                        id: item.url_key
                    })}>
                      <Image source={{uri: item.image.url}} style={{ width: '100%', height: 150 }}/>
                      <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{item.name}</Text>
                      <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>
                        {`${
                          item.price_range.minimum_price.final_price.currency
                        } ${item.price_range.minimum_price.final_price.value.toFixed(
                          2
                        )}`}
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </View>
              )     
          })}
          </ScrollView>
      </View>
    </ScrollView>
  )
}


const Banner = () =>{
  const { loading, error, data } = useQuery(Banner_Home);

  if (loading) return <><ActivityIndicator size="large" /><Text>Loading ...</Text></>;
  return (
    <View className="banner">
      <Image source={{uri: data.getHomepageSlider.images[0].mobile_image_url}} style={{ width: '100%', height: 200 }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    width: "100%",
    textAlign: "center",
    paddingBottom: 15,
    paddingTop: 30,
    fontWeight: "700"
  },
  card : {
    width: imageWidth,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15,
    borderRadius: 50
  }
});


export default Home