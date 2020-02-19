import React from 'react';

class Keypad extends React.Component {
    
    keyUpHandler = () => console.log('Entering password...')

    render () {
        return (
            <div>
            <input onKeyUp={this.keyUpHandler} type="password" />
            </div>
        )
    }
    

}

export default Keypad

