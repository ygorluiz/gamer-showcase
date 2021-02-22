import React from "react";
import Link from "next/link";
import Image from "next/image";
//Types
import { Game } from "@interfaces/game";
//Styles
import {
    StyledLink,
    Img,
    Title,
    Details,
    Description,
    Genre,
    IconImage,
} from "./styled";

//const
import { WINDOWS, BROWSER } from "@definitions/const";

// SVG imports

interface Props {
    content: Game;
}

export const GameCard: React.FC<Props> = ({ content }) => {
    const {
        id,
        title,
        thumbnail,
        short_description,
        genre,
        platform,
    } = content;
    const icons = platform.split(",").map((p) => {
        let icon = null;
        switch (p.trim()) {
            case BROWSER:
                icon = (
                    <Image
                        key={`${id}-browser`}
                        alt="browser icon"
                        src={"/icons/browser.svg"}
                        width={20}
                        height={20}
                    />
                );
                break;
            case WINDOWS:
                icon = (
                    <Image
                        key={`${id}-window`}
                        alt="windows icon"
                        src={"/icons/windows.svg"}
                        width={20}
                        height={20}
                    />
                );

                break;

            default:
                break;
        }
        return icon;
    });
    return (
        <StyledLink>
            <Img src={thumbnail} />

            <Details>
                <Link href={`games/${id}`}>
                    <Title>{title}</Title>
                </Link>
                <Description>{short_description}</Description>
                <Genre>{genre}</Genre>
                {icons}
            </Details>
        </StyledLink>
    );
};
