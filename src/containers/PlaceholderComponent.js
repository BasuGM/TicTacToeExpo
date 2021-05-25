import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity
} from 'react-native';
import x_icon from '../../assets/images/x_img.jpg';
import o_icon from '../../assets/images/o_img.png';

const PlaceholderComponent = ({ ownValue }) => {
  const [value, setValue] = React.useState(ownValue === "X");

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{height: 120, width: 120}}
        source={value ? x_icon : o_icon}
        resizeMode="contain"
      />
      </View>
    </View>
  );
};
export default PlaceholderComponent;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});
