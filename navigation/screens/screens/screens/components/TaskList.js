import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function TaskList({ showTitle }) {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Drink Water', done: false },
    { id: '2', text: 'Workout', done: false }
  ]);

  // Reset tasks every midnight
  useEffect(() => {
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

    const timer = setTimeout(() => {
      setTasks(tasks.map(t => ({ ...t, done: false })));
    }, msUntilMidnight);

    return () => clearTimeout(timer);
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <View>
      {showTitle && <Text style={{ fontSize: 20, marginBottom: 10 }}>Tasks</Text>}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTask(item.id)}>
            <Text style={{ fontSize: 16 }}>
              {item.done ? '✅' : '⬜'} {item.text}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
