import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, StyleSheet, Pressable, TextInput} from 'react-native';
import Text from '../components/text/text';
import HeaderPlanet from '../components/header-planet';
import { colors } from '../theme/color';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({item})=>{
    const {name, color} = item;
    const navigation = useNavigation();
    return(
        <Pressable 
        onPress={()=>{
            navigation.navigate('details', {planet: item});
        }}
        style={styles.item}
        >
            <View style={{alignItems:'center', flexDirection: 'row'}}>
                <View style={[styles.circle, {backgroundColor:color}]}></View>
                <Text preset='h3' style={styles.itemName}>{name}</Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
        </Pressable>
    )
}
export default function home({navigation}) {
    const [list, setList] = useState(PLANET_LIST);
    const renderItem = ({item}) =>{
                    return <PlanetItem item={item}/> ;
                    
    }
    const filterPlanet = (text) =>{
        const filterList = PLANET_LIST.filter(item=>{
            const itemName = item.name.toLowerCase();
            const userType = text.toLowerCase();

            return itemName.indexOf(userType) > -1;
        })
        setList(filterList);
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor: colors.black}}>
              <HeaderPlanet/>
              <TextInput 
              style={styles.searchInput} 
              placeholder='Type the planet name' 
              placeholderTextColor={colors.white} 
              onChangeText = {(text) => filterPlanet(text)}
              />
              <FlatList
                  contentContainerStyle={styles.list}
                  data={list}
                  keyExtractor={(item)=>item.name}
                  renderItem={renderItem}
                  ItemSeparatorComponent={()=><View style={styles.separator}/>}
              />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[3]
    },
    circle:{
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    itemName:{
        textTransform: 'uppercase',
        marginLeft: spacing[3]
    },
    separator:{
        borderBottomColor: colors.white,
        borderWidth: 0.2,
    },
    list:{
      padding: spacing[3]
    },
    searchInput:{
        color: colors.white,
        padding: spacing[2],
        marginHorizontal: spacing[4],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white
    }
  })
  
