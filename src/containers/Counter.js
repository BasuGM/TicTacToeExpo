import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ backgroundColor: 'blue', height: 200, width: 400 }}>
        <Text>Count incremented {count}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
