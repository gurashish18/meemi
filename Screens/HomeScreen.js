import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { offers1, offers2 } from '../API/api'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
import CategorySlider from '../components/CategorySlider'
import ProductSlider from '../components/ProductSlider'
import { winterwear, categories, subcategories } from '../API/api'
import {AuthContext} from '../nav/AuthProvider'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation()
    const {logout, user} = useContext(AuthContext)
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image source={require('../assets/mimi_logo.png')} style={{height: 70, width: 70, resizeMode: 'contain'}}/>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: 'space-evenly'}}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/bell.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate("Wishlist")}>
                                    <Image source={require('../assets/heart.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../assets/bag.png')} style={{height: 35, width: 35, resizeMode: 'contain'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <SearchBar />

                        <CategorySlider />

                        <Banner data={offers1}/>

                        <Image style={{width: '100%', height: 120, resizeMode: 'cover'}} source={{uri: 'https://www.crushpixel.com/big-static18/preview4/super-sale-banner-template-design-2766425.jpg'}}/>

                        <View style={{marginVertical: 5}}>
                            <Text style={{color: '#F72121', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Must-Have Winter Wear</Text>
                            <ProductSlider data={winterwear}/>
                        </View>


                        <Banner data={offers2}/>

                        <Text style={{color: '#F72121', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Men's Hours</Text>
                        <ProductSlider data={categories[1].products}/>

                        <Text style={{color: '#F72121', fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginVertical: 10}}>Categories to shop</Text>
                    </>
                }
                horizontal={false} 
                data={subcategories}
                numColumns={2}  
                renderItem={({item, index}) => (
                    <TouchableOpacity style={{width: '50%', alignItems: 'center', justifyContent: 'center'}} onPress={()=>navigation.navigate("Products", {item})}>
                        <Image source={{uri: item.image}} style={{height: 150, width: 150, resizeMode: 'contain', borderRadius: 250}}/>
                        <Text style={{color: '#000000'}}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        {/* <Image source={require('../assets/banner1.jpg')} style={{height: 200, width: '100%', resizeMode: 'stretch'}}/>
                        <View style={{flex:1,margin: 10, backgroundColor: '#eeeeee', borderRadius: 20, paddingVertical: 10, position: 'relative',zIndex: -1}}>
                            <Text style={{...styles.title, color: '#000000', textAlign: 'center', marginBottom: 20}}>Appliance Services</Text>
                            <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                                    {applianceServices.map((item) => (
                                        <TouchableOpacity key={item.id} style={{flexDirection: 'column', alignItems: 'center', width: '50%', padding: 5, position: 'relative', zIndex: -1}} onPress={() => navigation.navigate("ServiceBook", {item})}>
                                            <View>
                                                <Image source={item.imageuri} style={{height: 100,width: 100, resizeMode: 'contain'}} />
                                            </View>
                                            <View>
                                                <Text style={{color: '#000000'}}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                            </View>
                        </View>

                        <Image source={require('../assets/banner1.jpg')} style={{height: 200, width: '100%', resizeMode: 'stretch'}}/>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10, backgroundColor: '#eeeeee', borderRadius: 20, paddingVertical: 10}}>
                            <Image source={require('../assets/logo.png')} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
                            <View style={{width: 250}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: '#000000'}}>Bowrk Insurance Protection Program</Text>
                                <Text style={{marginBottom: 5, color: '#000000'}}>Upto Rs.10,0000 insurance protection with every service request</Text>
                                <Text style={{color: '#0066FF'}} onPress={() => navigation.navigate("Insurance")}>Learn More...</Text>
                            </View>
                        </View>

                        <Image source={require('../assets/banner2.jpg')} style={{height: 120, width: '100%', resizeMode: 'contain', marginBottom: 10}}/> */}
                    </>
                }    
            />
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
