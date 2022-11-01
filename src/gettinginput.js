import React, { useState } from 'react'
import { gameData } from './App';
import Game from './SnakeAndLadderGame';
import Getting from './gettingnameinput'


let howManyPlayers;
let playerObject;
let playernames;
// let playingmembers;
export default function Input() {
    const [noOfPlayers, setNoOfPlayers] = useState('')
    const [gameStart, setGameStart] = useState(false)
    const[hide,sethide]=useState('hide')

    function update() {
        howManyPlayers = Number(noOfPlayers)
        console.log(howManyPlayers)
        let playerlist = {}
        for (let i = 1; i <= howManyPlayers; i++) {
            playerlist[`Player${i}`] = 1
            console.log(playerlist)
            console.log(howManyPlayers)
            playerObject = playerlist
            setGameStart(true)
            sethide('nohide')
            
        }
    }
    return (
        <div>
            <div className={hide}>Enter Number Of Players
            <input className='numberinput' type="number" value={noOfPlayers} onChange={e => { setNoOfPlayers(e.target.value) }} />
            <button className='numberclick' onClick={update}>Click</button>
            </div>
            {gameStart ? <Getting /> : null}
        </div>
    )
}

export { howManyPlayers, playerObject }