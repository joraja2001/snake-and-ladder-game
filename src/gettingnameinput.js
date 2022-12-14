import React, { useState } from 'react'
import Game from './SnakeAndLadderGame';
import Input from './gettinginput';
import { howManyPlayers, playerObject } from './gettinginput'
let count = 1
let playerNames = []
let playerNamesObject = {};
export default function Getting() {
    const [namestart, setstart] = useState(false)
    const [names, setnames] = useState('')
    const [view,setview]=useState('view')
    function nameupdate() {
        playerNames.push(names)
        setnames('')
        count++
        if (count === howManyPlayers + 1) {
            setstart(true)
            setview('noview')
            for (let i = 1; i <= howManyPlayers; i++) {
                playerNamesObject[`Player${i}`] = playerNames[i - 1]
            }
        }
        // setstart(true)
    }
    return (
        <div>
            <div className={view}>Enter the player names
            <input className='nameinput' type='text' value={names} onChange={e => setnames(e.target.value)} />
            <button className='nameclick' onClick={nameupdate}>click</button>
            </div>
            {namestart ? <Game/> : null}
        </div>
    )
}

export { playerNamesObject }