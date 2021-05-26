import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PlaceholderComponent from './src/containers/PlaceholderComponent';

export default function App() {
  const [test1, setTest1] = React.useState("null");
  const [filled1, setFilled1] = React.useState(false);
  const [test2, setTest2] = React.useState("null");
  const [filled2, setFilled2] = React.useState(false);
  const [test3, setTest3] = React.useState("null");
  const [filled3, setFilled3] = React.useState(false);

  const [test4, setTest4] = React.useState("null");
  const [filled4, setFilled4] = React.useState(false);
  const [test5, setTest5] = React.useState("null");
  const [filled5, setFilled5] = React.useState(false);
  const [test6, setTest6] = React.useState("null");
  const [filled6, setFilled6] = React.useState(false);

  const [test7, setTest7] = React.useState("null");
  const [filled7, setFilled7] = React.useState(false);
  const [test8, setTest8] = React.useState("null");
  const [filled8, setFilled8] = React.useState(false);
  const [test9, setTest9] = React.useState("null");
  const [filled9, setFilled9] = React.useState(false);

  const [player, setPlayer] = React.useState('X');

  const [OW, setOW] = React.useState(false)
  const [XW, setXW] = React.useState(false)

  React.useEffect(() => {
    renderWinner()
  }, [OW, XW])

  const renderHeader = () => {
    return (
      <View
        style={{
          height: 80,
          width: 240,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          borderRadius: 25,
          marginBottom: 15,
        }}
      >
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
          Tic-Tac-Toe
        </Text>
      </View>
    );
  };

  const renderPlaceholder = (num, stateVar, filledVar) => {
    return (
      
      <View style={{ margin: 0 }}>
        {player === 'X' ? (
          <TouchableOpacity
            onPress={() => {
              setStateAll(num, filledVar);
              setPlayer(player === 'X' ? 'O' : 'X');
              console.log(player);
              checkWinner()
            }}
          >
            {filledVar === false && (
              <View
                style={{
                  height: 120,
                  width: 120,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
              >
                <Text
                  style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}
                >
                  Nothing
                </Text>
              </View>
            )}
            {filledVar === true && (
              <View>
                <PlaceholderComponent ownValue="X" />
              </View>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setStateAll(num, filledVar);
              setPlayer(player === 'X' ? 'O' : 'X');
              console.log(player);
              checkWinner()
            }}
          >
            {filledVar === false && (
              <View
                style={{
                  height: 120,
                  width: 120,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
              >
                <Text
                  style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}
                >
                  Nothing
                </Text>
              </View>
            )}
            {filledVar === true && (
              <View>
                <PlaceholderComponent ownValue="O" />
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const setStateAll = (num, filledVar) => {
    if (!filledVar) {
      switch (num) {
        case 1:
          setTest1(player === 'X' ? 'O' : 'X');
          setFilled1(true);
          break;
        case 2:
          setTest2(player === 'X' ? 'O' : 'X');
          setFilled2(true);
          break;
        case 3:
          setTest3(player === 'X' ? 'O' : 'X');
          setFilled3(true);
          break;
        case 4:
          setTest4(player === 'X' ? 'O' : 'X');
          setFilled4(true);
          break;
        case 5:
          setTest5(player === 'X' ? 'O' : 'X');
          setFilled5(true);
          break;
        case 6:
          setTest6(player === 'X' ? 'O' : 'X');
          setFilled6(true);
          break;
        case 7:
          setTest7(player === 'X' ? 'O' : 'X');
          setFilled7(true);
          break;
        case 8:
          setTest8(player === 'X' ? 'O' : 'X');
          setFilled8(true);
          break;
        case 9:
          setTest9(player === 'X' ? 'O' : 'X');
          setFilled9(true);
          break;
        default:
          console.log('default');
          break;
      }
    }
    // setTest1(!test1);
    console.log(num);
  };

  const checkWinner = () => {
    console.log(fetchAllPlaceValues())
  }

  const renderWinner = () => {
    return (
      <View
        style={{
          height: 60,
          width: 240,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          margin: 10
        }}
      >
        {
          (!OW && !XW) && (
            <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>Match Going On</Text>
          )
        }
        {
          OW && (
            <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>O won</Text>
          )
        }
        {
          XW && (
            <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>X won</Text>
          )
        }
      </View>
    )
  }

  const fetchAllPlaceValues = () => {
    
    var x1 = (test1 === 'X') && (test2 === 'X') && (test3 === 'X')
    var x2 = (test4 === 'X') && (test5 === 'X') && (test6 === 'X')
    var x3 = (test7 === 'X') && (test8 === 'X') && (test9 === 'X')

    var x4 = (test1 === 'X') && (test4 === 'X') && (test7 === 'X')
    var x5 = (test2 === 'X') && (test5 === 'X') && (test8 === 'X')
    var x6 = (test3 === 'X') && (test6 === 'X') && (test9 === 'X')

    var x7 = (test1 === 'X') && (test5 === 'X') && (test9 === 'X')
    var x8 = (test3 === 'X') && (test5 === 'X') && (test7 === 'X')

    var XWDemo = x1 || x2 || x3 || x4 || x5 || x6 || x7 || x8

    var o1 = (test1 === 'O') && (test2 === 'O') && (test3 === 'O')
    var o2 = (test4 === 'O') && (test5 === 'O') && (test6 === 'O')
    var o3 = (test7 === 'O') && (test8 === 'O') && (test9 === 'O')

    var o4 = (test1 === 'O') && (test4 === 'O') && (test7 === 'O')
    var o5 = (test2 === 'O') && (test5 === 'O') && (test8 === 'O')
    var o6 = (test3 === 'O') && (test6 === 'O') && (test9 === 'O')

    var o7 = (test1 === 'O') && (test5 === 'O') && (test9 === 'O')
    var o8 = (test3 === 'O') && (test5 === 'O') && (test7 === 'O')

    var OWDemo = o1 || o2 || o3 || o4 || o5 || o6 || o7 || o8
    setOW(OWDemo)
    setXW(XWDemo)

    var str1 = test1 + ' ' + test2 + ' ' + test3 + '\n' + test4 + ' ' + test5 + ' ' + test6 + '\n' + test7 + ' ' + test8 + ' ' + test9 + '\n' + 'X: ' + XWDemo + '\n' + 'O: ' + OWDemo
    return str1
  }

  const renderResetButton = () => {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          width: 160,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          borderRadius: 25,
          // marginVertical: 25,
        }}
        onPress={() => {
          resetAllState();
        }}
      >
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
          Reset
        </Text>
      </TouchableOpacity>
    );
  };

  const resetAllState = () => {
    setFilled1(false);
    setFilled2(false);
    setFilled3(false);

    setFilled4(false);
    setFilled5(false);
    setFilled6(false);

    setFilled7(false);
    setFilled8(false);
    setFilled9(false);

    setTest1("null")
    setTest2("null")
    setTest3("null")
    
    setTest4("null")
    setTest5("null")
    setTest6("null")
    
    setTest7("null")
    setTest8("null")
    setTest9("null")
    
    console.log(fetchAllPlaceValues())
  };

  return (
    <View style={styles.container}>
      {renderHeader()}

      {/* Grid Layout */}
      <View>
        <View style={{flexDirection: 'row'}}>
          <View>{renderPlaceholder(1, test1, filled1)}</View>

          <View>{renderPlaceholder(2, test2, filled2)}</View>

          <View>{renderPlaceholder(3, test3, filled3)}</View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>{renderPlaceholder(4, test4, filled4)}</View>

          <View>{renderPlaceholder(5, test5, filled5)}</View>

          <View>{renderPlaceholder(6, test6, filled6)}</View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>{renderPlaceholder(7, test7, filled7)}</View>

          <View>{renderPlaceholder(8, test8, filled8)}</View>

          <View>{renderPlaceholder(9, test9, filled9)}</View>
        </View>
      </View>

      {renderWinner()}

      {/* Reset Button */}
      {renderResetButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
