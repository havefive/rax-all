import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';

class App extends Component {
  state = {
    name: 'rax',
  };
  componentWillMount() {
    fetch('./api.json', {
       mode: 'same-origin',
       dataType: 'json',
       method: 'GET'
     })
     .then((response) => {
       return response.json();
     })
     .then((data) => {
        this.setState({name: data.name });
     })
     .catch((err) => {
       // handle exception
     });
  }
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome use {this.state.name}</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.
        </Text>
      </View>
    );
  }
}

export default App;
