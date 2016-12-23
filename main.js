import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
} from 'react-native';

import ListScene from './components/list'
import MapScene from './components/map'

class App extends React.Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'list' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'list':
              return <ListScene />;
            case 'map':
              return <MapScene />;
            default:
              return <View>{route.id}? WTF is this route?!</View>;
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
