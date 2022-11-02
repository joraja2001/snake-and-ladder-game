import React from 'react'
// import PalyerProp from './playerProp'
import './prop.css'
import { playerNamesObject } from './gettingnameinput'
const Props = ({ value, data, symbol }) => {
    let playerArr = []
    for (let i in data) {
        if (data[i] === 'in') {
            playerArr.push(playerNamesObject[i])
        }
    }
    return (
        <div className='lop' id={`Box${value.toString()}`}>
            <div className='box'>
                {playerArr.map(n => <span>{n}</span>)}
            </div>
            <div className='players'>
                <div>{value}</div>
                <div>{symbol}</div>
            </div>
        </div>
    )
}
export default Props
