import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

const UserLogin: React.FC = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Skip Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserLogin;
