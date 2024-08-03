/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigation from './src/navigation/RootNavigation';
import i18 from 'i18next';
import {initReactI18next, I18nextProvider, useTranslation} from 'react-i18next';
import en from './src/shared/localization/en.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DefaultTheme, PaperProvider} from 'react-native-paper';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const resources: any = {
  en: {translation: en},
};

i18.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});
function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const {t, i18n} = useTranslation();

  useEffect(() => {
    getStoredLanguage();
  }, []);

  const getStoredLanguage = async () => {
    const storedLanguage = await AsyncStorage.getItem('currentLanguage');
    console.log('storedLanguage=', storedLanguage);
    i18n.changeLanguage(storedLanguage || 'en');
  };
  return (
    // <SafeAreaView style={{flex: 1}}>
    // {/* <StatusBar
    //   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //   backgroundColor={backgroundStyle.backgroundColor}
    // />
    // <ScrollView
    //   contentInsetAdjustmentBehavior="automatic"
    //   style={backgroundStyle}>
    //   <Header />
    //   <View
    //     style={{
    //       backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //     }}>
    //     <Section title="Step One">
    //       Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //       screen and then come back to see your edits.
    //     </Section>
    //     <Section title="See Your Changes">
    //       <ReloadInstructions />
    //     </Section>
    //     <Section title="Debug">
    //       <DebugInstructions />
    //     </Section>
    //     <Section title="Learn More">
    //       Read the docs to discover what to do next:
    //     </Section>
    //     <LearnMoreLinks />
    //   </View>
    // </ScrollView> */}
    <PaperProvider theme={DefaultTheme}>
      <I18nextProvider i18n={i18}>
        <RootNavigation />
      </I18nextProvider>
    </PaperProvider>
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
