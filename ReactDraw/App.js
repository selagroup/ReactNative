import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SvgComponent from './SvgComponent';

type Props = {};
export default class App extends Component<Props> 
{
  startAnimating() 
  {
    if (this.state.to.x === 100) {
			this.addToPosition = -0.5;
		} else if (this.state.to.x === 15) {
			this.addToPosition = 0.5;
		}

		this.state.to.x += this.addToPosition;
		this.state.to.y += this.addToPosition;

		this.setState(this.state);
  }

  componentWillMount() {
    this.setState({
			to: {
				x: 15,
				y: 15
			}
		});
  }
  
	componentDidMount() {
    this.addToPosition = 0.5;    
    setInterval(this.startAnimating.bind(this), 1);
  }
  
  render(){
    return (
			<View style={styles.container}>
				
          <SvgComponent 
            x={this.state.to.x}
            y={this.state.to.y} />
				
      </View>
		)
	}  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
