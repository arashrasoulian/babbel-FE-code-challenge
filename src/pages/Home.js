import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../hook/useFetch";
import { Card } from "./Card";
import { fetchGamedata } from "../app/features/winSlice";

export function Home() {
  const [turn, setturn] = useState(1);
  const [allData] = useFetch("http://localhost:8000/api/game");

  const winnerId = useSelector((state) => state.win.winnerValue);
  const homeGameData = useSelector((state) => state.win.gameData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamedata(allData));
  }, [allData]);

  return (

    <div>
      <h1 className="title">tass bazi</h1>
      <p className="score_to_win">score to win: {allData.scoreToWin}</p>
      {winnerId && (
        <>
          <p className="winner">
            winner :
            {`${
              homeGameData.players.find((element) => {
                return element.id == winnerId;
              }).name
            }`}
            , with id : {`${winnerId}`}
          </p>
        </>
      )}
      <div className="all-boxes">
        {homeGameData &&
          homeGameData.players &&
          homeGameData.players.map((item, index) => (
            <div>
              <Card
                playerAvatar={item.imageUrl}
                playerName={item.name}
                playerNumber={index + 1}
                playerId={item.id}
                turnChanger={setturn}
                turn={turn}
                playerNumbers={homeGameData.players.length}
                scoreToWin={homeGameData.scoreToWin}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
