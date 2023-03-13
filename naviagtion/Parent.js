import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CredientalNavigation from './CredientalNavigation';
import DashboardNavigation from './DashboardNavigation';
import storage from '../storage/storage';

const Parent = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    storage
      .get('loginInfo')
      .then(data => {
        console.log(data)
        if (data) {
          setAuth(true);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return <>{!auth ? <CredientalNavigation /> : <DashboardNavigation />}</>;
};

export default Parent;

const styles = StyleSheet.create({});
