import { NavigationState } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ContantTexts, NavigationStrings } from '../Constants';
import ImagePaths from '../Constants/ImagePaths';

const AppFooter = ({ active, navigation }: any) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity style={styles.tabStyle} onPress={() => navigation.navigate(NavigationStrings.HOME)}>
                <Image source={ImagePaths.IC_HOME} style={[styles.tabIconStyle, { tintColor: active === ContantTexts.HOME ? '#008080' : 'black' }]} resizeMode={'contain'} />
                <Text style={[styles.tabTextStyle, { color: active === ContantTexts.HOME ? '#008080' : 'black' }]}>Home</Text>
                {active === ContantTexts.HOME ? (<View style={styles.activeViewStyle} />) : null}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabStyle} onPress={() => navigation.navigate(NavigationStrings.SURFING)}>
                <Image source={ImagePaths.IC_SURFING} style={[styles.tabIconStyle, { tintColor: active === ContantTexts.SURFING ? '#008080' : 'black' }]} resizeMode={'contain'} />
                <Text style={[styles.tabTextStyle, { color: active === ContantTexts.SURFING ? '#008080' : 'black' }]}>Surfing</Text>
                {active === ContantTexts.SURFING ? (<View style={styles.activeViewStyle} />) : null}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabStyle}>
                <Image source={ImagePaths.IC_HULA} style={[styles.tabIconStyle, { tintColor: active === ContantTexts.HULA ? '#008080' : 'black' }]} resizeMode={'contain'} />
                <Text style={[styles.tabTextStyle, { color: active === ContantTexts.HULA ? '#008080' : 'black' }]}>Hula</Text>
                {active === ContantTexts.HULA ? (<View style={styles.activeViewStyle} />) : null}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabStyle}>
                <Image source={ImagePaths.IC_VULCANO} style={[styles.tabIconStyle, { tintColor: active === ContantTexts.VULCANO ? '#008080' : 'black' }]} resizeMode={'contain'} />
                <Text style={[styles.tabTextStyle, { color: active === ContantTexts.VULCANO ? '#008080' : 'black' }]}>Vulcano</Text>
                {active === ContantTexts.VULCANO ? (<View style={styles.activeViewStyle} />) : null}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        bottom: 0,
        height: 72,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#5151E0',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.24,
        shadowRadius: 16,
        elevation: 4,
        backgroundColor: 'white',
    },
    tabStyle: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIconStyle: {
        width: 24,
        height: 24,
    },
    tabTextStyle: {
        marginTop: 4,
        fontSize: 10,
        lineHeight: 16,
        fontWeight: '700',
    },
    activeViewStyle: {
        height: 4,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#008080',
    },
});

export default AppFooter;