import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//components
import SearchBar from './src/components/SearchBar/SearchBar'
import CardItem from './src/components/CardItem/CardItem'
//data
import productData from './src/data/product-data.json'

export default function App() {
  const renderProducts = ({ item }) => <CardItem products={item} />

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Patika Store</Text>
            <FlatList
                numColumns={2}
                ListHeaderComponent={() => (<SearchBar />)}
                keyExtractor={item => item.id.toString()}
                data={productData}
                renderItem={renderProducts}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'purple'
  }
});
