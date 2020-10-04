import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Platform,
    Image,
    Title
  } from 'react-native';
import { Card } from 'react-native-paper';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width * 0.5 ;

const Plp = ({ route, navigation }) => {
    const { id } = route.params

  const category1 = [
    {
      id : 11,  
      name: 'Kacamata Haviva',
      price: '$ 49,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200214_P_Glasses-053.jpg'
    },
    {
        id: 12,
      name: 'Kacamata Holivia',
      price: '$ 59,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200214_P_Glasses-064.jpg'
    },
    {
        id: 13,
      name: 'Kacamata Inez', 
      price: '$ 39,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200225_P_Glasses-017.jpg'
    },
    {
        id: 14,
      name: 'Kacamata Ivory', 
      price: '$ 19,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200225_P_Glasses-001.jpg'
    }
  ]
  const category2 = [
    {
      id : 21,  
      name: 'Jam Tangan Zaid',
      price: '$ 49,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_181206_P_Watches-181_V1-gabung.jpg'
    },
    {
        id: 22,
      name: 'Jam Tangan Frisco',
      price: '$ 59,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200602_A_ArrangementA-096-V2.jpg'
    },
    {
        id: 23,
      name: 'Jam Tangan Kendal', 
      price: '$ 39,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200312_P_Watches-107-V2.jpg'
    }
  ]
  const category3 = [
    {
      id : 31,  
      name: 'Sepatu Noela',
      price: '$ 49,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200221_P_Shoes-192.jpg'
    },
    {
        id: 32,
      name: 'Sepatu Eva',
      price: '$ 59,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200312_P_Shoes-016.jpg'
    },
    {
        id: 33,
      name: 'Sepatu Oglivia', 
      price: '$ 39,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200604_A_ArrangementA-012.jpg'
    }
  ]
  const category4 = [
    {
      id : 41,  
      name: 'Tas Blacky',
      price: '$ 49,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200220_P_Bag-580.jpg'
    },
    {
        id: 42,
      name: 'Tas Delion',
      price: '$ 59,9',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_200220_P_Bag-176.jpg'
    }
  ]
  const category5 = [
    {
      id : 51,  
      name: 'Parfum Blue',
      price: '$ 13,2',
      img: 'https://www.sophieparis.com/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/A/1/A1_180711_P_Cosmetics-003.jpg'
    }
  ]
    if ( id == 1 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Kacamata</Text>
                    {
                    category1.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 2 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Jam Tangan</Text>
                    {
                    category2.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 3 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Sepatu</Text>
                    {
                    category3.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 4 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Tas Wanita</Text>
                    {
                    category4.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 5 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Parfum</Text>
                    {
                    category5.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
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
    },
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    child: {
        width: '48%', 
        margin: '1%', 
        aspectRatio: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10
    }
  });
export default Plp