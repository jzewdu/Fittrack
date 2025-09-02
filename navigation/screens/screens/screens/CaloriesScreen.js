import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function CaloriesScreen() {
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [meals, setMeals] = useState([]);

  const addMeal = () => {
    if (!calories || !protein) return;
    const newMeal = {
      id: Date.now().toString(),
      calories: parseInt(calories),
      protein: parseInt(protein),
    };
    setMeals([...meals, newMeal]);
    setCalories('');
    setProtein('');
  };

  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
  const totalProtein = meals.reduce((sum, m) => sum + m.protein, 0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Add Meal</Text>

      <TextInput
        placeholder="Calories"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
        style={{
          borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5
        }}
      />

      <TextInput
        placeholder="Protein (grams)"
        value={protein}
        onChangeText={setProtein}
        keyboardType="numeric"
        style={{
          borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5
        }}
      />

      <Button title="Add Meal" onPress={addMeal} />

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Total: {totalCalories} cal / {totalProtein} g protein
      </Text>

      <FlatList
        style={{ marginTop: 10 }}
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>🍴 {item.calories} cal, {item.protein} g protein</Text>
        )}
      />
    </View>
  );
}
