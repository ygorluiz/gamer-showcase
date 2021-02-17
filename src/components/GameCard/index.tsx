import React from "react";
import Link from "next/link";
//Types
import { Game } from "@interfaces/game";
//Styles
import { Container } from "./styled";

interface Props {
    content: Game;
}

export const GameCard: React.FC<Props> = ({ content }) => {
    const { id, title, thumbnail, short_description, genre } = content;

    return (
        <div>
            <img src={thumbnail} />
            <Link href={`games/${id}`}>
                <h2>{title}</h2>
            </Link>

            <p>{short_description}</p>
            <p>{genre}</p>
        </div>
    );
};
