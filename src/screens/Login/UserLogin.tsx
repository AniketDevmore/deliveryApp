import React, {useRef, useState} from 'react';
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
import {Button} from 'react-native-paper';
const colorConst = require('../../assets/colorConstant/colors.json');

const UserLogin: React.FC = () => {
  const {t} = useTranslation();
  const navigation: any = useNavigation();
  let digitsArray = Array.from(String('123456'), digit => digit);

  const otpInputs = Array.from({length: 6});
  const [loader, setLoader] = useState<boolean>(false);
  const [mobileNumber, setmobileNumber] = useState<any>();
  const [isOtpVisible, setIsOtpVisible] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>([]);

  //Reference of OTP input field to manage the index of OTP view
  const refs: any = otpInputs.reduce((acc: any, _, index: number) => {
    acc[index] = useRef<TextInput>(null);
    return acc;
  }, {} as Record<number, React.RefObject<TextInput>>);

  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < 5) {
      refs[index + 1].current?.focus();
    }
  };

  const onMobileNumberChange = (value: any) => {
    setmobileNumber(value);
     setIsOtpVisible(false)
    }

  const sendOtpHandler = () => {
    // navigation.navigate('UserOtp');
    setLoader(true);
    setTimeout(() => {
      setIsOtpVisible(true);
      setLoader(false);
      setOtp(['1', '7', '3', '4', '5', '6']);
    }, 3000);
  };

  const continueHandler = () => {
    console.log('continue called')
  }
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
            value={mobileNumber}
            onChangeText={(value: any) => onMobileNumberChange(value)}
          />
          <Text
            style={[
              styles.countryCode,
              isOtpVisible && mobileNumber.toString().length === 10
                ? {top: 35}
                : {top: 45},
            ]}>
            +91
          </Text>
          <View style={styles.otpInputContainer}>
            {isOtpVisible && (mobileNumber && mobileNumber.toString().length === 10)
              ? otpInputs.map((_, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInputStyle}
                    keyboardType="numeric"
                    multiline={false}
                    maxLength={1}
                    editable={false}
                    value={otp[index]}
                    onChangeText={value => handleInputChange(index, value)}
                    ref={refs[index]}
                  />
                ))
              : null}
          </View>
          <Button
            mode="contained"
            loading={loader}
            disabled={
              !isOtpVisible
                ? (mobileNumber
                  ? ( mobileNumber.toString().length === 10
                    ? false
                    : true)
                  : true)
                : (otp.length === 6
                ? false
                : true)
            }
            style={[
              styles.loginButton,
              !isOtpVisible
                ? (mobileNumber
                  ? (mobileNumber.toString().length === 10
                    ? {backgroundColor: colorConst.greenColor}
                    : {backgroundColor: colorConst.backgroundDisableGray})
                  : {backgroundColor: colorConst.backgroundDisableGray})
                : (otp.length === 6
                ? {backgroundColor: colorConst.greenColor}
                : {backgroundColor: colorConst.backgroundDisableGray}),
            ]}
            onPress={((isOtpVisible && (mobileNumber && mobileNumber.toString().length === 10)) ? () => continueHandler() : () => sendOtpHandler())}>
            {(isOtpVisible && (mobileNumber && mobileNumber.toString().length === 10)) ? t('userLogin.continue') : t('userLogin.sendOtp')}
          </Button>
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
