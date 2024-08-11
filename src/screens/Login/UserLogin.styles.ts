import {StyleSheet} from 'react-native';
const colorConst = require('../../assets/colorConstant/colors.json');

const styles = StyleSheet.create({
  userLoginContainer: {
    flex: 1,
    backgroundColor: colorConst.backgroundWhite,
  },
  topSliderContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: '#fff',
  },
  skipLogin: {
    backgroundColor: colorConst.backgroundWhite,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 3,
    top: 20,
    left: '75%',
    shadowColor: colorConst.shadowColor,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 10,
    elevation: 8,
  },
  skipLoginText: {
    color: colorConst.textBlack,
  },
  bottomLoginContainner: {
    width: '100%',
    height: '55%',
    backgroundColor: colorConst.backgroundWhite,
    alignItems: 'center',
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#ff9900',
    borderRadius: 20,
    shadowColor: 'red',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 8,
    elevation: 8,
  },
  loginText: {
    fontWeight: '600',
    color: colorConst.textBlack,
    fontSize: 18,
    paddingVertical: 20,
  },
  bottomInnerContainer: {
    minHeight: 150,
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConst.backgroundWhite,
    paddingHorizontal: 15,
    paddingVertical: 25,
    shadowColor: colorConst.shadowColor,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 10,
    elevation: 8,
    position: 'relative',
  },
  inputStyle: {
    width: 200,
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    borderColor: colorConst.borderColor,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 45,
    color: colorConst.textBlack,
  },
  otpInputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  otpInputStyle: {
    width: 35,
    borderRadius: 10,
    height: 45,
    borderWidth: 1,
    borderColor: colorConst.borderColor,
    marginBottom: 20,
    marginHorizontal: 2,
    textAlign: 'center',
    color: colorConst.textBlack,
  },
  countryCode: {
    position: 'absolute',
    color: colorConst.textBlack,
    left: '28%',
  },
  loginButton: {
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  privacyTab: {
    position: 'absolute',
    height: 25,
    width: '100%',
    backgroundColor: colorConst.backgroundGray,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsText: {
    fontSize: 11,
    color: colorConst.textGray,
  },
  termsInnerText: {
    color: colorConst.lightGreen,
  },
});

export default styles;
