import React, { createContext, useContext, useState } from 'react'
import '../App.css'
const AppContext = createContext(null)

const Parent = () => {
    const [username, setUsername] = useState('Starting State')
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <div className='example1'>
                <h1>Example 1 Parent</h1>
                <h2>{username}</h2>
                <Child />
            </div>
        </AppContext.Provider>
    )
}

export default Parent


export const Child = () => {
    return (
        <div>
            <h1>Example 1 Child</h1>
            <GrandChild />
        </div>
    )
}


export const GrandChild = () => {
    // get context(global state) using useContext hook
    const { setUsername } = useContext(AppContext);
    return (
        <div>
            <h1>Example 1 GrandChild</h1>
            <button
                onClick={() => {
                    setUsername("Username set by GrandChild Component")
                }}
            >
                Change Username
            </button>
        </div>
    )
}

