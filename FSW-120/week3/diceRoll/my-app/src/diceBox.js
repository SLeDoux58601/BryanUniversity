// import React, { Component } from 'react'

// class DiceBox extends Component() {
//     constructor(props) {
//         super(props)
//         this.state = {
//             num1: 0,
//             num2: 0,
//             num3: 0,
//             num4: 0,
//             num5: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//        const min = 0;
//        const max = 6;
//        const rand = Math.random() * max - min;
//        this.setState({ random: this.state.random + rand});
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.num1}</h1>
//                 <h1>{this.state.num2}</h1>
//                 <h1>{this.state.num3}</h1>
//                 <h1>{this.state.num4}</h1>
//                 <h1>{this.state.num5}</h1>
//                 <button onClick={this.handleClick}>Roll!</button>
//             </div>
//         )
//     }
// }

// export default DiceBox