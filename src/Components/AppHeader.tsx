import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ImagePaths } from '../Constants';

const AppHeader = () => {
    return (
        <View style={styles.containerStyle}>
            <Image source={ImagePaths.IMG_APP_LOGO} style={styles.logoStyle} resizeMode={'contain'} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 80,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    logoStyle: {
        width: 94,
        height: 35,
    },
});

export default AppHeader;