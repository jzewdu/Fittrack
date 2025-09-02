import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function ProteinCircle({ dailyGoal }) {
  const currentProtein = 60; // example value
  const percent = (currentProtein / dailyGoal) * 100;

  return (
    <View style={{ alignItems: 'center', margin: 20 }}>
      <ProgressCircle
        percent={percent}
        radius={50}
        borderWidth={8}
        color="#0077ff"
        shadowColor="#e0e0e0"
        bgColor="#fff"
      >
        <Text>{currentProtein}/{dailyGoal} g</Text>
      </ProgressCircle>
    </View>
  );
}
