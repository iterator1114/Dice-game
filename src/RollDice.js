import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = { slides: ['one', 'two', 'three', 'four', 'five', 'six'] }
    constructor(props) {
        super(props);
        this.state = {
            num1: 'one',
            num2: 'two',
            rolling: false
        }
        this.roll = this.roll.bind(this)
    };

    roll() {
        const rand1 = this.props.slides[Math.floor(Math.random() * this.props.slides.length)];
        const rand2 = this.props.slides[Math.floor(Math.random() * this.props.slides.length)];
        this.setState({ num1: rand1, num2: rand2, rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die img={this.state.num1} roll={this.state.rolling} />
                    <Die img={this.state.num2} roll={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll dice...'}</button>
            </div>
        )
    }
}

export default RollDice;