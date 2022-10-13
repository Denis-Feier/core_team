import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Cell from "../../components/Cell";

interface MainScreenProps {
  contactsList: string[];
}

const MainScreen: React.FC<MainScreenProps> = ({ contactsList }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={[styles.container, styles.list]}
        data={contactsList}
        keyExtractor={(item, index) => {
          return `${item}-${index}`;
        }}
        renderItem={({ item }) => {
          return <Cell item={item}/>
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: '#e1e1e1',
  }
});

export default MainScreen;
