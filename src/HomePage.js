import React from 'react';
import style from './HomePage.css';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <p className="instructions">Welcome -- Please click <em>"Search"</em> above to view Pokemon.</p>
            </div>
        )
    }
}
