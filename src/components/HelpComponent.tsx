type Props = {
    question: string;
    answer: string;
}

export function HelpComponent(props: Props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <div style={{ width: "20%", paddingLeft: "20%" }}>
                <p style={{
                    textAlign: "left",
                }}>
                    <span style={{ color: "#FC3030" }}>Q. </span>{props.question}
                </p>
            </div>
            <div style={{
                width: "50%",
            }}>
                <p style={{
                    textAlign: "left",
                }}>
                    <span style={{ color: "#FC3030" }}>A. </span>{props.answer}
                </p>
            </div>
        </div>
    );
}