import React from 'react';
import { StyleSheet, View } from 'react-native';
import HelloWorldApp from './components/LearnTheBasics/HelloWorldApp';
import Bananas from './components/Props/Bananas';
import LotsOfGreetings from './components/Props/LotsOfGreetings';
import Started from './components/GettingStarted/Started';
import BlinkApp from './components/State/BlinkApp';
import LotsOfStyles from './components/Style/LotsOfStyles';
import FixedDimensionsBasics from './components/HeightAndWidth/FixedDimensionsBasics';
import FlexDimensionsBasics from './components/HeightAndWidth/FlexDimensionsBasics';
import FlexDirectionBasics from './components/LayoutWithFlexbox/FlexDirectionBasics';
import JustifyContentBasics from './components/LayoutWithFlexbox/JustifyContentBasics';
import AlignItemsBasics from './components/LayoutWithFlexbox/AlignItemsBasics';
import PizzaTranslator from './components/HandlingTextInput/PizzaTranslator';
import ButtonBasics from './components/HandlingTouches/ButtonBasics';
import Touchables from './components/HandlingTouches/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './components/UsingScrollView/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './components/UsingListViews/FlatListBasics';
import SectionListBasics from './components/UsingListViews/SectionListBasics';
import FetchExample from './components/Networking/FetchExample';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Started /> */}
        {/* <HelloWorldApp /> */}
        {/* <Bananas /> */}
        {/* <LotsOfGreetings /> */}
        {/* <BlinkApp /> */}
        {/* <LotsOfStyles /> */}
        {/* <FixedDimensionsBasics /> */}
        {/* <FlexDimensionsBasics /> */}
        {/* <FlexDirectionBasics /> */}
        {/* <JustifyContentBasics /> */}
        {/* <AlignItemsBasics /> */}
        {/* <PizzaTranslator /> */}
        {/* <ButtonBasics /> */}
        {/* <Touchables /> */}
        {/* <IScrolledDownAndWhatHappenedNextShockedMe /> */}
        {/* <FlatListBasics /> */}
        {/* <SectionListBasics /> */}
        <FetchExample />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
