import React, { useEffect, useState } from "react";

import { Wrapper, GameList } from "@components";
import GlobalStyle from "@styles/globalStyles";
//Definitions

import { Game } from "@interfaces/game";
import axios from "axios";
import { API_HOST, API_KEY } from "@definitions/const";

const Home: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState<string>("");

    useEffect(() => {
        axios
            .get("/games", {
                baseURL: `https://${API_HOST}/api`,
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": API_HOST,
                },
                params: {
                    platform: "browser",
                },
            })
            .then((res) => setGames(res.data))
            .catch((e) => setErr(e.message));
    }, []);

    return (
        <Wrapper>
            <div>Home</div>
            <GameList err={err} games={games} />
        </Wrapper>
    );
};
export default Home;
