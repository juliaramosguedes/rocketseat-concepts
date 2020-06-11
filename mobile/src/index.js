import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default () => {
  const [projects, setProjects] = useState([]);

  const onAddProject = () =>
    api
      .post('/projects', {
        title: 'BaaS com Firebase',
        owner: 'Julia Ramos',
      })
      .then((response) => setProjects([...projects, response.data]));

  useEffect(() => {
    api.get('/projects').then((response) => setProjects(response.data));
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={onAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 60,
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
