import React from 'react';

class EyesOnMe extends React.Component {
    
    focusHandler = () => console.log('Good!')

    driftHandler = () => console.log('Hey! Eyes on me!')


    render () {
        return (
            <div>
                <button onFocus={this.focusHandler} onBlur={this.driftHandler}/>
            </div>
        )
    }
    

}

export default EyesOnMe

