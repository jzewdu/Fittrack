import React from 'react';
import { ScrollView } from 'react-native';
import TaskList from '../components/TaskList';
import CalorieCircle from '../components/CalorieCircle';
import ProteinCircle from '../components/ProteinCircle';

export default function HomeScreen() {
  return (
    <ScrollView>
      <TaskList showTitle={true} />
      <CalorieCircle dailyGoal={3000} />
      <ProteinCircle dailyGoal={150} />
    </ScrollView>
  );
}
