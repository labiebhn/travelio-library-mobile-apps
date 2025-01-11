import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Gap = ({height = 0, width = 0, borderRadius = 4, isSkeleton = false}) => {
  return isSkeleton ? (
    <SkeletonPlaceholder>
      <View style={{height, width, borderRadius}} />
    </SkeletonPlaceholder>
  ) : (
    <View style={{height, width}} />
  );
};

export default Gap;

const styles = StyleSheet.create({
  container: {},
});
