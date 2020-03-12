import React, { Component } from 'react'


class Blocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        color: ["white", "white", "white", "white"]
    }}
    render() {
        return(
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
        }
}






//     constructor(props){
//         super(props);
//         this.state = {
//             color: "white",
//             first: "white",
//             second: "white",
//             third: "white",
//             fourth: "white",
//         }
//     }

//     First() {
//         this.setState({
//             color: this.state.first
//         });
//     }

//     Second() {
//         this.setState({
//             color: this.state.second
//         });
//     }

//     Third() {
//         this.setState({
//             color: this.state.third
//         });
//     }

//     Fourth() {
//         this.setState({
//             color: this.state.fourth
//         });
//     }

//     changeColor(evt) {
//         this.setState({
//             color: "red"
//         });
//     }

//     changFirstColor(evt){
//         this.setState({
//             first: evt.target.value
//         })
//     }

//     changSecondColor(evt){
//         this.setState({
//             second: evt.target.value
//         })
//     }

//     changThirdColor(evt){
//         this.setState({
//             third: evt.target.value
//         })
//     }

//     changFourthColor(evt){
//         this.setState({
//             fourth: evt.target.value
//         })
//     }
// }

// render() {
//     const styles = {backgroundColor: this.state.color };

// }



export default Blocks
