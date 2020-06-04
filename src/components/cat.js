import React from 'react';

class Cat extends React.Component {
    miaow = () => {
        console.log("Miaow! Miaow!");
        
    }
    render() {

        return <div>
            <div>
                Cat.
            </div>            
            <div>
                <button onClick={this.miaow}>Miaow</button>
            </div>            
        </div>



    }
}

export default Cat;