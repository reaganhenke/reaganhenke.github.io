import React, { Component } from 'react';
import './magnet.css';

export default class Magnet extends Component {
constructor(props) {
    super(props);
    this.state = { };
    this.ondragend = this.ondragend.bind(this);
}

  ondragend(e) {
    const margin = window.innerWidth * 0.1 / 2;
    this.setState({
        xPos: e.pageX - margin - this.props.width/2,
        yPos: e.pageY - 10
    })
  }

  render() {
    const style = {
        top: this.state.yPos ? this.state.yPos + 'px' : this.props.top, 
        right: this.props.right,
        left: this.state.xPos ? this.state.xPos + 'px' : this.props.left,
        width: this.props.width + 'px',
        transform: `rotate(${Math.floor(Math.random() * 20) - 10}deg)`
    }
    return (
        <div className="magnet" style={style} draggable="true" onDragEnd={this.ondragend} onTouchMove={this.ondragend}>{this.props.content}</div> 
    )
  }
}
