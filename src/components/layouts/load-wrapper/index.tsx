import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {SkeletonMain} from '../../loaders';
import {LoadingType, PaginationStatus} from '../../../types/service';

export type LoadWrapperType = '';

export interface LoadWrapperProps {
  loading: LoadingType;
  type?: LoadWrapperType;
  paginate?: PaginationStatus;
  refreshing?: boolean | undefined;
  children: ReactNode;
}

const LoadWrapper: FC<LoadWrapperProps> = ({
  loading,
  paginate,
  type,
  refreshing,
  children,
}) => {
  const renderLoader = () => {
    switch (type) {
      default:
        return (
          <View style={styles.container}>
            <SkeletonMain />
          </View>
        );
    }
  };

  const renderRoot = () => {
    if (loading === 'pending') {
      if (paginate) {
        if (paginate === 'reset' && !refreshing) {
          return renderLoader();
        } else {
          return children;
        }
      } else {
        if (refreshing) {
          return children;
        } else {
          return renderLoader();
        }
      }
    } else {
      return children;
    }
  };

  return <>{renderRoot()}</>;
};

export default LoadWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    marginBottom: 12,
  },
});
