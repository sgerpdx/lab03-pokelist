import React from 'react'
import style from './Spinner.css'

export default class Spinner extends React.Component {
    render() {
        return (
            <div className="spinner-area">
                <img width="100" height="100" src="https://media.tenor.com/images/0dbeb3d7b1fe35a49ac81e76bc3e5653/tenor.gif" />
            </div>
        )
    }
}
