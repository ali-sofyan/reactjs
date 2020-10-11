import React, { useState, useEffect } from 'react';
import {
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
  Title,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width * 0.33 ;

const categoryListSchema = gql`
  {
    categoryList(filters: { ids: { eq: "2" } }) {
      children {
        id
        name
        url_key
      }
    }
  }
`;

const Category = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const {loading, error, data} = useQuery(categoryListSchema);
  
  const renderItem = ({item, index}) => {
    
    return (
      <TouchableOpacity key={index} style={styles.categoryList}  onPress={() => navigation.navigate('Product', { id: item.id })}>
        <Text style={styles.titleText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) return <><ActivityIndicator size="large" /><Text>Loading ...</Text></>;

  return (
    <FlatList
      data={data === undefined ? [] : data.categoryList[0].children}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

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
  },
  categoryList: {
    width: "100%",
    borderBottomColor: "#000",
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: "#f0f0f0"
  }
});

export default Category