import React from 'react';



export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to the PokeList. Please click below to search Pokemon:</p>
                <button className="leave-home">Go Search!</button>
            </div>
        )
    }
}
