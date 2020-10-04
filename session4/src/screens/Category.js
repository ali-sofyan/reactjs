import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  Title
} from 'react-native';
import { Card } from 'react-native-paper';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width * 0.33 ;

const Category = ({ navigation }) => {


  const categories = [
      {
        id: 1,
        name: 'Kacamata',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200225_P_Glasses-010.jpg'
      },
      {
        id: 2,
        name: 'Jam tangan',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200909_P_Watches-042.jpg'
      },
      {
        id: 3,
        name: 'Sepatu Wanita', 
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200312_P_Shoes-016.jpg'
      },
      {
        id: 4,
        name: 'Tas Wanita', 
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/hover_image/9df78eab33525d08d6e5fb8d27136e95/A/2/A2_200806_P_Bag-093.jpg'
      },
      {
        id: 5,
        name: 'Parfum',
        img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_180711_P_Cosmetics-003.jpg'  
      },
    ]



  return (
    <ScrollView vertical>
    {
      categories.map((category, index) => {
        return (
          <View key={index}>
            <Card style={{ paddingBottom: 13 }}>
                <Image source={{uri: category.img}} style={{ width: '100%', height: 150 }}/>
                <Button
                  color="#FBC7A2"
                  title={category.name} 
                  onPress={() => navigation.navigate('Product', { id: category.id })}  
                />
            </Card>
          </View>
        )
      })
    }
    </ScrollView>
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





export default Category