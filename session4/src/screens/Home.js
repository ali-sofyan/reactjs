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
  Title
} from 'react-native';
import { Card } from 'react-native-paper';
import { set } from 'react-native-reanimated';  

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width * 0.33 ;

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState()
  const [sale, setSale] = useState()

  useEffect(() => {
    setCategories([
      {
        name: 'Kacamata',
        price: '$ 30',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200225_P_Glasses-010.jpg'
      },
      {
        name: 'Jam tangan',
        price: '$ 81',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200909_P_Watches-042.jpg'
      },
      {
        name: 'Sepatu Wanita', 
        price: '$ 71',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200312_P_Shoes-016.jpg'
      },
      {
        name: 'Tas Wanita', 
        price: '$ 21',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/hover_image/9df78eab33525d08d6e5fb8d27136e95/A/2/A2_200806_P_Bag-093.jpg'
      },
      {
        name: 'Parfum Blue',
        price: '$ 59',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_180711_P_Cosmetics-003.jpg'  
      },
    ])

    setSale([
      {
        name: 'Koko Hijau Army',
        price: '$ 49,9',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200518_M_Men-088.jpg'
      },
      {
        name: 'Tas Anne',
        price: '$ 59,9',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200316_P_Bag-233.jpg'
      },
      {
        name: 'Tas Chees', 
        price: '$ 39,9',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200225_M_Website-011.jpg'
      },
      {
        name: 'Skin care', 
        price: '$ 19,9',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_sphbl1n.jpg'
      },
      {
        name: 'Sepatu Nelson',
        price: '$ 69,9',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200211_M_Website-150.jpg'  
      },
    ])
  }, [])



  return (
    <ScrollView vertical>
      <View>
          <Banner/>
      </View>
      <View>
          <Text style={styles.titleText}>Top Product</Text>
          <RenderCategory categories={categories} />
      </View>
      <View style={{ marginBottom: 30}}>
          <Text style={styles.titleText}>Hot Sale!</Text>
          <RenderSale sale={sale} />
      </View>
    </ScrollView>
  )
}


const Banner = () =>{
  return (
    <View className="banner">
      <Image source={require('../assets/banner.jpg')} style={{ width: '100%', height: 200 }}/>
    </View>
  )
}

const RenderCategory = ({ categories, navigation}) => {
  if(categories && categories.length > 0){
    return (
      <ScrollView horizontal>
          {
            categories.map((category, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Card style={{ paddingBottom: 10 }}>
                      <Image source={{uri: category.img}} style={{ width: '100%', height: 150 }}/>
                      <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{category.name}</Text>
                      <Text style={{ textAlign: "center", color: 'red', fontSize: 10}}>{category.price}</Text>
                  </Card>
                </View>
              )
            })
          }
                
      </ScrollView>
    )
  }
  return null
}

const RenderSale = ({ sale }) => {
  if(sale && sale.length > 0){
    return (
      <ScrollView horizontal>
          {
            sale.map((product, idx) => {
              return (
                <View key={idx} style={styles.card}>
                  <Card style={{ paddingBottom: 10 }}>
                      <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                      <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                      <Text style={{ textAlign: "center", color: 'red', fontSize: 10}}>{product.price}</Text>
                  </Card>
                </View>
              )
            })
          }
      </ScrollView>
    )
  }
  return null
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