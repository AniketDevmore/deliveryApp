import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './UserLogin.styles';
import {useNavigation} from '@react-navigation/native';

const UserLogin: React.FC = () => {
  const {t} = useTranslation();
  const navigation: any = useNavigation();

  const confirmOtpHandler = () => {
    navigation.navigate('UserOtp');
  };
  return (
    <SafeAreaView style={styles.userLoginContainer}>
      <View style={styles.topSliderContainer}>
        <TouchableOpacity style={styles.skipLogin}>
          <Text style={styles.skipLoginText}>{t('userLogin.skipLogin')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLoginContainner}>
        <View style={styles.logoContainer}></View>
        <Text style={styles.loginText}>{t('userLogin.loginText')}</Text>
        <View style={styles.bottomInnerContainer}>
          <TextInput
            style={styles.inputStyle}
            keyboardType="numeric"
            multiline={false}
            maxLength={10}
          />
          <TouchableOpacity
            onPress={confirmOtpHandler}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>
              {t('userLogin.continue')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.privacyTab}>
          <Text style={styles.termsText}>
            {t('userLogin.terms')}
            <Text style={styles.termsInnerText}>
              {t('userLogin.conditions')}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;
