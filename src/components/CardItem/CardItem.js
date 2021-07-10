import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './CardItem.style'

const CardItem = ({ products }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.inStock}>{products.inStock === true ? '' : 'Stokta Yok'}</Text>
            </View>
        </View>
    )
}

export default CardItem;