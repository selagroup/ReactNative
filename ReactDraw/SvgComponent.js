import React, {Component} from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import PropTypes from 'prop-types';

export default class SvgComponent extends Component {
    
    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }

    render() {
        return (
            <Svg height="400" width="400">
                <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green"/>
                <Rect x={this.props.x} y={this.props.y} width="70" height="70"
                    stroke="red" strokeWidth="2" fill="yellow"/>
            </Svg>
        );
    }
}