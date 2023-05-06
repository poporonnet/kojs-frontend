import {useState} from "react";
import {Header} from "../components/header.tsx";

export function Notfound() {
    const [time, setTime] = useState<number>(5);
    setTimeout(() => {
        setTime(time - 1);

    }, 1000);
    if (time === 0) {
        window.location.href = "/";
    }
    return (
        <center>
            <Header page={"notfound"}/>
            <h1>404 Not Found</h1>
            <p>5秒後にホームに戻ります</p>
            <p>{time}</p>
        </center>
    );
}