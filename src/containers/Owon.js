import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Owon = () => (
    <View style={styles.container}>
        <Text>Owon</Text>
    </View>
    )
export default Owon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});