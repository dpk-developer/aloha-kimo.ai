import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { AppHeader, AppFooter } from '../Components';
import { ContantTexts, ImagePaths } from '../Constants';

const SurfingScreen = ({ navigation }: any) => {
    const catergoriesArray = [
        { name: '1. Maui', imageUrl: ImagePaths.IMG_SPOT_ONE },
        { name: '2. Kauai', imageUrl: ImagePaths.IMG_SPOT_TWO },
        { name: '3. Honolulu', imageUrl: ImagePaths.IMG_SPOT_THREE },
    ];

    const catergoriesRenderItems = ({ item, index }: any) => (
        <View key={index} style={[styles.catergoryCardStyle, { marginBottom: index == 2 ? 80 : 0 }]}>
            <Text style={styles.catergoryItemStyle}>{item?.name}</Text>
            <Image source={item?.imageUrl} style={styles.spotImageStyle} resizeMode={'cover'} />
        </View>
    );

    return (
        <View style={styles.containerStyle}>
            <AppHeader />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subContainerBgStyle}>
                    <ImageBackground source={ImagePaths.IMG_SURFING} style={styles.bannerStyle} resizeMode={'cover'}>
                        <Text style={styles.bannerTextStyle}>Surfing</Text>
                    </ImageBackground>

                    <Text style={styles.descriptionTextStyle}>Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.</Text>

                    <Fragment>
                        <Text style={styles.highlightTextStyle}>Top Spots</Text>

                        <FlatList
                            scrollEnabled={false}
                            data={catergoriesArray}
                            renderItem={catergoriesRenderItems}
                            keyExtractor={(item) => item?.name}
                            showsVerticalScrollIndicator={false}
                        />
                    </Fragment>
                </View>

                <Text style={styles.catergoryTextStyle}>Travel Guide</Text>

                <View style={styles.travelGuideContainerStyle}>
                    <View style={styles.travelGuideSubContainerStyle}>
                        <View>
                            <Text style={styles.guideNameTextStyle}>Hadwin Malone</Text>
                            <Text style={styles.catergoryItemStyle}>Guide since 2012</Text>
                        </View>
                        <Image source={ImagePaths.IC_RANDOM_AVATAR} style={styles.guiderAvatarStyle} resizeMode={'cover'} />
                    </View>

                    <View style={styles.contactContainerStyle}>
                        <Text style={styles.contactTextStyle}>Contact</Text>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.buttonContainerStyle}>
                <Text style={styles.buttonTextStyle}>Book a trip</Text>
            </TouchableOpacity>

            <AppFooter active={ContantTexts.SURFING} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#E6F2F2',
    },
    bannerStyle: {
        height: 240,
        width: '100%',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerTextStyle: {
        fontSize: 40,
        lineHeight: 52,
        fontWeight: '700',
        color: 'white',
        opacity: 0.6,
    },
    descriptionTextStyle: {
        color: '#001A1A',
        marginBottom: 40,
        marginHorizontal: 16,
    },
    subContainerBgStyle: {
        backgroundColor: 'white',
        marginBottom: 40,
    },
    highlightTextStyle: {
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 24,
        color: '#001A1A',
        fontWeight: '700',
        marginStart: 16,
    },
    catergoryTextStyle: {
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 16,
        color: '#001A1A',
        fontWeight: '700',
        marginStart: 16,
    },
    catergoryCardStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 24,
        paddingLeft: 24,
        height: 68,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        shadowColor: '#008080',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.16,
        shadowRadius: 16,
        elevation: 5,
        marginHorizontal: 16,
    },
    catergoryItemStyle: {
        fontSize: 16,
        lineHeight: 20,
        color: '#008080',
        fontWeight: '700',
    },
    spotImageStyle: {
        width: 120,
        height: 63,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    travelGuideContainerStyle: {
        marginHorizontal: 16,
        padding: 24,
        borderRadius: 8,
        marginBottom: 155,
        backgroundColor: 'white',
    },
    travelGuideSubContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    guideNameTextStyle: {
        fontSize: 24,
        color: '#001A1A',
        fontWeight: '700',
        marginBottom: 15,
    },
    guiderAvatarStyle: {
        width: 74,
        height: 74,
    },
    contactContainerStyle: {
        width: 116,
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#008080',
        marginTop: 33,
    },
    contactTextStyle: {
        fontSize: 16,
        lineHeight: 20,
        color: '#008080',
        fontWeight: '700',
    },
    buttonTextStyle: {
        fontSize: 16,
        lineHeight: 20,
        color: 'white',
        fontWeight: '700',
    },
    buttonContainerStyle: {
        width: '91%',
        bottom: 90,
        height: 40,
        elevation: 5,
        borderRadius: 8,
        shadowRadius: 8,
        shadowOpacity: 0.8,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: '#073838',
        justifyContent: 'center',
        backgroundColor: '#008080',
        shadowOffset: { width: 0, height: 0 },
    },
});

export default SurfingScreen;