import * as Haptics from 'expo-haptics';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks(prev => [...prev, task]);
    setTask('');
    Haptics.selectionAsync(); // вибрация при добавяне
  };

  const removeTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // вибрация при триене
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 My To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Добави нова задача"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Добави" onPress={addTask} />
      </View>

      <FlatList
        style={{ width: '100%' }}
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Text style={styles.task}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={{ color: '#888', marginTop: 20 }}>Няма задачи</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 60, backgroundColor: '#111' },
  title: { fontSize: 28, color: 'orange', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', marginBottom: 20, width: '90%', justifyContent: 'space-between' },
  input: { borderWidth: 1, borderColor: '#888', flex: 1, marginRight: 10, paddingHorizontal: 10, color: '#fff' },
  task: { padding: 12, fontSize: 18, color: '#fff', borderBottomWidth: 1, borderBottomColor: '#333' },
});
