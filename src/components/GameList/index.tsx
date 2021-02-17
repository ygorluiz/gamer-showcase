import React, { useState } from "react";
// Components
import { GameCard } from "@components/GameCard";
//Global
//Styles
import { Container } from "./styled";
//Types
import { Game } from "@interfaces/game";

//Definitions

interface Props {
    err?: string;
    games: Game[];
}

export const GameList: React.FC<Props> = ({ err, games }) => {
    if (err) {
        return <p>Unable to fetch games</p>;
    }
    if (!games?.length) {
        return <p>No games avaliable</p>;
    }
    return (
        <ul>
            {games.map((game) => (
                <li key={game.id}>
                    <GameCard content={game} />
                </li>
            ))}
        </ul>
    );
};
