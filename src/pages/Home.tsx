import React, {  } from 'react'
import "../App.scss"
import CreateForm from './createForm';

function Home() {
    return (
        <div className="home">
            <span className="heading">
                <p className="heading">Welcome to Task Tracker</p>
                <p>Create, View & Delete task made easy</p>
            </span>
            <CreateForm />
            <p style={{marginBottom:'50%'}}> </p>
        </div >
    )
}

export default Home
