import React from 'react';
import {View, SafeAreaView,StyleSheet, ScrollView, Pressable, Linking} from 'react-native'
import HeaderPlanet from '../components/header-planet';
import Text from '../components/text/text';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';

const PlanetSection = ({title, value}) =>{
    return(
        <View style={styles.planetSection}>
            <Text preset='small' style={{textTransform:'uppercase'}}>{title}</Text>
            <Text preset='h4'>{value}</Text>
        </View>
    )
}
const details = ({route}) => {
    const planet = route.params.planet;
    const {name, description, rotationTime, revolutionTime,radius,avgTemp, wikiLink} = planet;
    const renderImage =(name)=>{
        switch(name){
            case "mercury":
                return<MercurySvg/>;
            case "earth":
                return<EarthSvg/>
            case "jupiter":
                return<JupiterSvg/>;
            case "mars":
                return<MarsSvg/>;
            case "neptune":
                return<NeptuneSvg/>;
            case "saturn":
                return<SaturnSvg/>;
            case "uranus":
                return<UranusSvg/>;
            case "venus":
                return<VenusSvg/>
        }
    }

    const onPressLink = ()=>{
        Linking.openURL(wikiLink);
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderPlanet backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage (name)}
                </View>
                <View>
                    <Text preset='h2' style={styles.viewName}>
                        {name}
                    </Text>
                </View>
                <View>
                    <Text preset='h4' style={styles.viewName}>
                        {description}
                    </Text>
                </View>
                <Pressable onPress={onPressLink} style={styles.source}>
                    <Text>
                        Source: 
                    </Text>
                    <Text style={{fontWeight: 'bold', textDecoration:'underline'}}>
                        Wikipedia
                    </Text>
                    <View style={{marginVertical:spacing[4]}}></View>
                </Pressable>
                <PlanetSection title={"Rotation Time"} value={rotationTime}/>
                <PlanetSection title={"Revolution Time"} value={revolutionTime}/>
                <PlanetSection title={"Radius"} value={radius}/>
                <PlanetSection title={"Avg Temp"} value={avgTemp}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default details;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: colors.black
    },
    imageView:{
        marginTop: spacing[4],
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewName:{
        alignSelf:'center',
        marginTop: spacing[3],
        marginHorizontal: spacing[4]
    },
    source:{
        flexDirection: 'row',
        marginTop:spacing[3],
        alignSelf: 'center'
    },
    planetSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: spacing[4],
        marginTop: spacing[2],
        borderWidth: 0.2,
        borderColor: colors.white,
        padding: spacing[3],
        marginBottom: spacing[2]
    }
  })