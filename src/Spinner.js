import React from 'react'
import style from './Spinner.css'

export default class Spinner extends React.Component {
    render() {
        return (
            <div className="spinner-area">
                <img width="100" height="100" src="https://media3.giphy.com/media/l4FGjUQKkfkiaXI1a/giphy.gif" />
            </div>
        )
    }
}
