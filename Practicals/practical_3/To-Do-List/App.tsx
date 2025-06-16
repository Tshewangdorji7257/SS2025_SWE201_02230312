import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
  updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { FIRESTORE_DB } from './firebseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';

export interface Todo {
  title: string;
  done: boolean;
  id: string;
}

const List = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, 'todos');
    const subscribe = onSnapshot(todoRef, {
      next: (snapshot: QuerySnapshot<DocumentData>) => {
        const todos: Todo[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Todo[];
        setTodos(todos);
      },
    });

    return () => subscribe();
  }, []);

  const addTodo = async () => {
    if (todo.trim().length === 0) return;
    await addDoc(collection(FIRESTORE_DB, 'todos'), { title: todo, done: false });
    setTodo('');
  };

  const renderTodo = ({ item }: { item: Todo }) => {
    const ref = doc(FIRESTORE_DB, `todos/${item.id}`);

    const toggleDone = async () => {
      await updateDoc(ref, { done: !item.done });
    };

    const deleteItem = async () => {
      await deleteDoc(ref);
    };

    return (
      <View style={styles.todoCard}>
        <TouchableOpacity onPress={toggleDone} style={styles.todoRow}>
          {item.done ? (
            <Ionicons name="checkmark-circle" size={24} color="#6BCB77" />
          ) : (
            <Entypo name="circle" size={24} color="#B0B0B0" />
          )}
          <Text
            style={[
              styles.todoText,
              item.done && { textDecorationLine: 'line-through', color: '#aaa' },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteItem}>
          <Ionicons name="trash-bin" size={22} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#f2f2f2', '#e6e6e6']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <Text style={styles.title}>✨ Your Todos</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="What do you need to do?"
              onChangeText={(text) => setTodo(text)}
              value={todo}
              style={styles.input}
              placeholderTextColor="#888"
            />
            <TouchableOpacity
              onPress={addTodo}
              disabled={todo.trim() === ''}
              style={[
                styles.addButton,
                { backgroundColor: todo.trim() === '' ? '#ccc' : '#6C63FF' },
              ]}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={todos}
            renderItem={renderTodo}
            keyExtractor={(todo: Todo) => todo.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default List;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  todoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  todoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
});
