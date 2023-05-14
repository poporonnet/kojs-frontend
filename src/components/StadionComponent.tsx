import {Link} from "react-router-dom";
type Props = {
    name: string;
    time: string;
    type: string;
    link: string
}

export function StadionComponent(props: Props) {
    const color = props.type === "active" ? "#3A88D0" :
        props.type === "archive" ? "#FFD700" : "#22DC22";
    return (
        <div style={{
            margin: "1rem 0.5rem",
            display: "block"
        }}>
            <Link to={props.link} className={"Link"}>
                <div style={{
                    border: "solid",
                    width: "20rem",
                    height: "8rem",
                    borderColor: color,
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                }}>
                    <center className={"border"}>
                        <h3>{props.name}</h3>
                    </center>
                    <div style={{ width: "90%"}} >
                        <p>{props.time}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
