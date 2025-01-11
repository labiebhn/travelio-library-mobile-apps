import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap} from '../../layouts';

const SkeletonMain = () => {
  return (
    <View style={styles.container}>
      <Gap width={140} height={12} isSkeleton />
      <Gap height={8} />
      <Gap width={220} height={12} isSkeleton />
      <Gap height={8} />
      <Gap width={80} height={12} isSkeleton />
    </View>
  );
};

export default SkeletonMain;

const styles = StyleSheet.create({
  container: {},
});
