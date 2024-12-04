import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { theme } from '../../theme';
import { styles } from './styles';
import { TaskStatisticsType } from '../../screens/HomeScreen/type';

const SemicircleProgressBar = ({ progress, statistics }: { progress: number, statistics: TaskStatisticsType }) => {
  console.log('log/ArcProgressBar/info: progress ', progress);
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={progress}
        tintColor={theme.colors.primary}
        arcSweepAngle={180}
        rotation={-90}
        backgroundColor={theme.colors.dark}
      >
        {() => (
          <>
            <Text style={styles.heading}>
              {statistics.completedTasks} / {statistics.totalTasks}
            </Text>
            <Text style={styles.subHeading}>
              Tasks Completed in Total
            </Text>
          </>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};



export default SemicircleProgressBar;
