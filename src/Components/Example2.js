import React, { createContext, useContext, useState } from 'react';
import "../App.css";

const AppContext = createContext(null);

function Parent() {
    const [username, setUsername] = useState('Starting State')
    return (
        <div className='example2'>
            <h1>Parent</h1>
            <AppContext.Provider value={{ username, setUsername }}>
                <Child1 />
                <Child2 />
            </AppContext.Provider>
        </div>
    )
}

export default Parent

export const Child1 = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>Child1</h1>
            <h2>{username}</h2>
        </div>
    )
}

export const Child2 = () => {
    const { setUsername } = useContext(AppContext)
    return (
        <div>
            <h1>Child2</h1>
            <button
                onClick={() => { setUsername("Username Recieved from Child2") }}
            >
                Change Username
            </button>
        </div >
    )
}

