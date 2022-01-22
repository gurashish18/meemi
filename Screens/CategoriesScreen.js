import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import {categories} from '../API/api'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get("window").width
const CategoriesScreen = () => {
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <Text style={{color: '#000000', fontSize: 30, fontWeight:'bold', letterSpacing:5, alignSelf: 'center', marginVertical: 20}}>Categories</Text>
                    </>
                    }
                horizontal={false} 
                data={categories}
                contentContainerStyle={{alignSelf: 'center'}}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate("Products", {item})} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width*0.8, marginVertical: 10, borderBottomWidth: 0.5}}>
                        <View style={{borderRadius: 100, padding: 10, backgroundColor: '#F71717', marginBottom: 5}}>
                            <Image source={item.image} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{color: '#000000', fontSize: 24}}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        
                    </>
                }    
            />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
