import React from 'react'
import { useContext } from 'react'
import { MyMainContext } from '../context/myContext'

function HomePage() {

    const {myName, age} = useContext(MyMainContext)

    return (
        <>
        <h1>Name: {myName}, Age: {age}</h1>
            <h1 className='text-center mt-3'>Home Page</h1>
            <div className="card container">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default HomePage
