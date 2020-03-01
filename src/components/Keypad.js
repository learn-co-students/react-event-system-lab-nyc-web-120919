import { Component } from "react";

// Code Keypad Component Here

class Keypad extends Component {
    
    handlePassword = () => {

    }
    
    render() {
        return (
            <div>
            <input onKeyUp={this.handlePassword} type="password" />
            />
            </div>
        )
    }
}

export default Keypad 