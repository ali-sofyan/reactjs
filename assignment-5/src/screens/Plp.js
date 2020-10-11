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
    Title,
    FlatList,
    Button,
    ActivityIndicator
  } from 'react-native';
import { Card } from 'react-native-paper';
import {gql, useQuery} from '@apollo/client';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width * 0.5 ;

const Product_List = gql`
  query Category($id: String!) {
    categoryList(filters: { ids: { eq: $id } }) {
      id
      name
      description
      products {
        items {
          id
          name
          url_key
          image {
            url
          }
          price_range {
            maximum_price {
              final_price {
                value
                currency
              }
            }
            minimum_price {
              final_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  }
`;

const Plp = ({ route, navigation }) => {
    const { id } = route.params;
    const response = useQuery(Product_List, {
      variables: { id: id },
    });

    const {loading, error, data} = response;
    const renderItem = ({item, index}) => {
    return (
      // start card
      <Card key={index} style={styles.child}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail', 
          { 
              id: item.url_key
          })}>

          <Image source={{uri: item.image.url}} style={{ width: '100%', height: 200 }}/>
          <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{item.name}</Text>
          <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>
                    {`${
                      item.price_range.minimum_price.final_price.currency
                    } ${item.price_range.minimum_price.final_price.value.toFixed(
                      2
                    )}`}</Text>

          </TouchableOpacity>
      </Card>
      // end card
    );
  };

  if (loading) return <><ActivityIndicator size="large" /><Text>Loading ...</Text></>;
  const products = data.categoryList[0].products.items;
  if( products.length < 1 ) { alert("Product kosong")};
  return (
      <View>
        <Text style={styles.titleText}>{data.categoryList[0].name}</Text>
        <FlatList
          numColumns={3}
          data={data === undefined ? alert("data kosong") : products }
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
  );

}   

const styles = StyleSheet.create({
    titleText: {
      width: "100%",
      textAlign: "center",
      paddingBottom: 5,
      paddingTop: 10,
      fontWeight: "700",
      fontSize: 20,
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
        elevation: 10,
        minHeight: 260
    }
  });
export default Plp