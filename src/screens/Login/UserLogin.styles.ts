import {StyleSheet} from 'react-native';
const colorConst = require('../../assets/colorConstant/colors.json');

const styles = StyleSheet.create({
  userLoginContainer: {
    flex: 1,
    backgroundColor: colorConst.backroundWhite,
  },
  topSliderContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: '#fff',
  },
  skipLogin: {
    backgroundColor: colorConst.backroundWhite,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 3,
    top: 20,
    left: '75%',
  },
  skipLoginText: {
    color: colorConst.textBlack,
  },
  bottomLoginContainner: {
    width: '100%',
    height: '55%',
    backgroundColor: colorConst.backroundWhite,
    alignItems: 'center',
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#ff9900',
    borderRadius: 20,
  },
  loginText: {
    fontWeight: '600',
    color: colorConst.textBlack,
    fontSize: 18,
    paddingVertical: 20,
  },
  bottomInnerContainer: {
    height: 150,
    width: 300,
    borderWidth: 1,
    borderColor: colorConst.borderColor,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  inputStyle: {
    width: 180,
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    borderColor: colorConst.borderColor,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: colorConst.greenColor,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  loginButtonText: {
    color: colorConst.textWhite,
    fontSize: 14,
    fontWeight: '700',
  },
  privacyTab: {
    position: 'absolute',
    height: 25,
    width: '100%',
    backgroundColor: '#f2f2f2',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
