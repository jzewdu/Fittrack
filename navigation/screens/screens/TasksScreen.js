import React from 'react';
import { View } from 'react-native';
import TaskList from '../components/TaskList';

export default function TasksScreen() {
  return (
    <View>
      <TaskList showTitle={true} />
    </View>
  );
}
