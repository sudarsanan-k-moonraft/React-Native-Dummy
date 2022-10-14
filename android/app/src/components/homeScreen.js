import {Button} from 'react-native';
import {products} from '../data/products';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {useState,useContext} from 'react';

import React from 'react';
import DetailsScreen from './detailsScreen';
import { Context,CartContext } from './context';

const HomeScreen = ({navigation}) => {

const {cart,setCart}= useContext(CartContext);

  const onPressButton = () => {
   
    navigation.push('Details');
  };
  
  return (
    <>
      <ScrollView style={styles.fullContainer}>
      <Text  style={styles.cartButton} onPress={onPressButton} >View Your Cart </Text> 
     
     
        {products.map((item, i) => {
          return (
            <>
              <View style={styles.container}>
                <Image
                  source={item.productImage}
                  style={styles.productImg}></Image>
                <Text style={styles.textItems}>{item.productName}</Text>
                {cart.includes(item) ? (
                  <Text style={styles.chart} onPress={()=>setCart(cart.filter((x)=>x.id !== item.id))}>REMOVE FROM CART</Text>
                ) : (
                  <Text style={styles.chart} onPress={()=>setCart([...cart,item])}>ADD TO CHART</Text>
                )}
                <Text style={styles.textItems} >₹{item.productPrice}</Text>
              </View>
              
            </>
          );
        })}
        <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
                </View>
      </ScrollView>
      
    </>
  );
};

const styles = StyleSheet.create({
  productImg: {
    width: 200,
    height: 200,
  },
  container: {
    margin: 5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor:'black',
    borderWidth:3,
  },
  fullContainer: {
    margin: 5,
    flex: 1,
  },
  textItems: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  chart: {
    fontSize: 20,
    border: 1,
    backgroundColor: 'green',
    padding: 10,
    color: 'white',
  },
  cartButton:{
    backgroundColor: 'yellow',
    color:'White',
    fontSize: 18,
    fontWeight: 'bold',
    width:150,
    marginLeft: 120,
    padding: 10,
    marginTop:20,
  },
  footer:{
    backgroundColor:'#e7e9eb',
    flex:3,
  },
  footerText:{
    fontSize: 20,
    fontWeight: 'bold',
  }

});

// export {CartContext,CartProvider}
export default HomeScreen;
