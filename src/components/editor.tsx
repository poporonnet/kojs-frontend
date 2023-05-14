import Editor from '@monaco-editor/react';
import {languages} from "./languages.ts";
import {useState} from "react";
type EditorProps = {
    language: string;
    height: string;
    style?: React.CSSProperties;
    value?: string;
    link: string;
}
export function ProgramEditor( props: EditorProps ) {
    const [language, setLanguage] = useState<string>(props.language)
    return (
        <div style={props.style}>
            <Editor
                language={language}
                height={props.height}
                value={props.value}
                theme="vs-light"
                options={{
                    fontSize: 20,
                    minimap: {
                        enabled: false,
                    }
                }}
            />
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
            >
                {/*言語を選択するボタン
                選択肢を上方向に表示
                */}
                <select
                    style={{
                        width: "auto",
                        height: "auto",
                        fontSize: "1.5rem",
                        padding: "0.2rem 0.6rem",
                        margin: "0.2rem 0.6rem",
                        border:"none",
                        backgroundColor: "#fff",
                        borderBottom: "solid 2px #000",
                    }}
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option value={lang} key={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
                <button
                    style={{
                        color: "black",
                        backgroundColor: "#FFD700",
                        borderRadius: "0.5rem",
                        width: "5rem",
                        height: "3rem",
                        border: "none",
                        fontSize: "1.4rem",
                    }}
                >
                    提出
                </button>
            </div>
        </div>
    )
}