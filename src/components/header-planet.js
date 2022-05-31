import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';
import Text from './text/text';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderPlanet({backBtn, title="The Planets"}){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {backBtn &&(
                <Pressable style={{marginRight: spacing[4]}}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                >
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
            )}
            <Text preset='h3'>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
      padding: spacing[4],
      borderBottomWidth: 0.2,
      borderBottomColor: colors.white,
      flexDirection: 'row',
      alignItems:'center'
    }
  })
  
