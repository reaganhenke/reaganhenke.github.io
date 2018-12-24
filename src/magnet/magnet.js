import React, { Component } from 'react';
import './magnet.css';

export default class Magnet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: `rotate(${Math.floor(Math.random() * 20) - 10}deg)`
        };
        this.ondragend = this.ondragend.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }

    onTouchMove(e) {
        const margin = window.innerWidth * 0.1 / 2;
        this.setState({
            xPos: e.targetTouches[0].pageX - margin - this.props.width/2,
            yPos: e.targetTouches[0].pageY - 10,
        })
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.position = 'fixed';
    }

    onTouchEnd(e) {
        this.setState({
            rotation: `rotate(${Math.floor(Math.random() * 20) - 10}deg)`
        })
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.position = 'relative';
    }

    ondragend(e) {
        const margin = window.innerWidth * 0.1 / 2;
        this.setState({
            xPos: e.pageX - margin - this.props.width/2,
            yPos: e.pageY - 10,
            rotation: `rotate(${Math.floor(Math.random() * 20) - 10}deg)`
        })
    }

    render() {
        const style = {
            top: this.state.yPos ? this.state.yPos + 'px' : this.props.top, 
            right: this.props.right,
            left: this.state.xPos ? this.state.xPos + 'px' : this.props.left,
            width: this.props.width + 'px',
            transform: this.state.rotation
        }
        return (
            <div className="magnet" style={style} draggable="true" onDragEnd={this.ondragend} onTouchEnd={this.onTouchEnd} onTouchMove={this.onTouchMove}>{this.props.content}</div> 
        )
    }
}
