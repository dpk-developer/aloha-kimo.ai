import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { AppHeader, AppFooter } from '../Components';
import { ContantTexts, ImagePaths, NavigationStrings } from '../Constants';

const DashboardScreen = ({ navigation }: any) => {
  const highlightArray = [
    { imageUrl: ImagePaths.IMG_CARD_ONE, title: 'Surfing', description: 'Best Hawaiian islands for surfing.' },
    { imageUrl: ImagePaths.IMG_CARD_TWO, title: 'Hula', description: 'Try it yourself.' },
    { imageUrl: ImagePaths.IMG_CARD_THREE, title: 'Vulcanoes', description: 'Volcanic conditions can change at any time.' },
  ];

  const catergoriesArray = [
    { name: 'Adventure' },
    { name: 'Culinary' },
    { name: 'Eco-tourism' },
    { name: 'Family' },
    { name: 'Sport' },
  ];

  const highlightRenderItems = ({ item, index }: any) => (
    <View key={index} style={styles.cardContainerStyle}>
      <Image source={item?.imageUrl} style={styles.cardImageStyle} resizeMode={'cover'} />
      <Text style={styles.cardTitleTextStyle}>{item?.title}</Text>
      <Text style={styles.cardDescriptionTextStyle}>{item?.description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.SURFING)}>
        <Image source={ImagePaths.IC_NEXT_BUTTON} style={styles.nextButtonStyle} resizeMode={'cover'} />
      </TouchableOpacity>
    </View>
  );

  const catergoriesRenderItems = ({ item, index }: any) => (
    <View key={index} style={styles.catergoryCardStyle}>
      <Text style={styles.catergoryItemStyle}>{item?.name}</Text>
      <Image source={ImagePaths.IC_NEXT} style={styles.nextIconStyle} resizeMode={'cover'} />
    </View>
  );

  return (
    <View style={styles.containerStyle}>
      <AppHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainerBgStyle}>
          <Image source={ImagePaths.IMG_APP_BANNER} style={styles.bannerStyle} resizeMode={'cover'} />

          <Fragment>
            <Text style={styles.highlightTextStyle}>Highlights</Text>
            <FlatList
              horizontal
              data={highlightArray}
              renderItem={highlightRenderItems}
              keyExtractor={(item) => item?.title}
              showsHorizontalScrollIndicator={false}
            />
          </Fragment>
        </View>

        <Text style={styles.catergoryTextStyle}>Catergories</Text>

        <View style={styles.catergoryItemContainerStyle}>
          <FlatList
            scrollEnabled={false}
            data={catergoriesArray}
            renderItem={catergoriesRenderItems}
            keyExtractor={(item) => item?.name}
            showsVerticalScrollIndicator={false}
          />
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

      <AppFooter active={ContantTexts.HOME} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#E6F2F2',
  },
  bannerStyle: {
    height: 480,
    width: '100%',
    marginBottom: 40,
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
  cardContainerStyle: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#008080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 5,
    marginStart: 16,
    borderRadius: 8,
    marginBottom: 40,
  },
  cardImageStyle: {
    width: 304,
    height: 170,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitleTextStyle: {
    fontSize: 24,
    color: '#008080',
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  cardDescriptionTextStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: '#001A1A',
    fontWeight: '400',
    marginBottom: 6,
    marginHorizontal: 24,
  },
  nextButtonStyle: {
    width: 40,
    height: 40,
    marginBottom: 24,
    marginHorizontal: 24,
    alignSelf: 'flex-end',
  },
  catergoryCardStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 24,
    height: 68,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  catergoryItemStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: '#001A1A',
    fontWeight: '400',
  },
  catergoryItemContainerStyle: {
    marginBottom: 40,
    marginHorizontal: 16,
  },
  nextIconStyle: {
    width: 16,
    height: 16,
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

export default DashboardScreen;