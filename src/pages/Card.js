import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { winnerState } from "../app/features/winSlice";

export function Card({
  playerName,
  playerId,
  turnChanger,
  turn,
  playerNumber,
  playerNumbers,
  scoreToWin,
  playerAvatar,
}) {
  
  const [diceNumber, setDiceNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const winnerId = useSelector((state) => state.win.winnerValue);
  const dispatch = useDispatch();

  function clickHolder() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(randomNumber);
    turnChanger(turn < playerNumbers ? turn + 1 : 1);
    setSum(sum + randomNumber);
    if (sum + randomNumber >= scoreToWin) {
      dispatch(winnerState(playerId));
    }
  }

  return (
    <div>
      <div
        className="box"
        style={{
          backgroundColor: `${winnerId === playerId ? `#15ef53` : `#f2f3f6`}`,
        }}
      >
        <p className="playername">{playerName}</p>
        <img src={`${playerAvatar}`} className="avatar"></img>
        <div className="playername">score : {sum}</div>
        {turn == playerNumber && !winnerId ? (
          <div>
            <button
              onClick={clickHolder}
              style={{
                backgroundColor: `#6477f2`,
                borderRadius: `10px`,
                cursor: `pointer`,
              }}
            >
              roll
            </button>
          </div>
        ) : (
          <button
            style={{
              cursor: `not-allowed`,
            }}
          >
            wait
          </button>
        )}
        <div> {diceNumber}</div>
      </div>
    </div>
  );
}
