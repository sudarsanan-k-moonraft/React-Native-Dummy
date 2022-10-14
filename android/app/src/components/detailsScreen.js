import { View,Text,Image,StyleSheet, ScrollView } from 'react-native';
import { CartContext } from './context';
import { useContext } from 'react';

const DetailsScreen = () => {
 
  const {cart,setCart}= useContext(CartContext);
    return (
      <>
        <View style={styles.fullContainer}>
          
          {console.warn(cart)}
          <Text style={styles.cartPage}>Your CART</Text>
          <ScrollView>
          {cart.map((item,i) =>{
            return(
              <>
            <View style={styles.container}>
                <Image
                  source={item.productImage}
                  style={styles.productImg}></Image>
                <Text style={styles.textItems}>{item.productName}</Text>
                <Text style={styles.textItems} >₹{item.productPrice}</Text>
              </View>
              </>
            )
          })}
          </ScrollView>
        </View>
      </>
    );
  };
 
  
const styles = StyleSheet.create({
 
  fullContainer: {
    margin: 5,
    flex: 1,
    backgroundColor:'#90ee90',
  },
  cartPage:{
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
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
});
  export default  DetailsScreen;