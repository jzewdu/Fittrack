import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function CalorieCircle({ dailyGoal }) {
  const currentIntake = 1200; // example value
  const percent = (currentIntake / dailyGoal) * 100;

  return (
    <View style={{ alignItems: 'center', margin: 20 }}>
      <ProgressCircle
        percent={percent}
        radius={50}
        borderWidth={8}
        color="#ff8800"
        shadowColor="#e0e0e0"
        bgColor="#fff"
      >
        <Text>{currentIntake}/{dailyGoal} cal</Text>
      </ProgressCircle>
    </View>
  );
}
