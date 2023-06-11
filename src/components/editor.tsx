import Editor from "@monaco-editor/react";
import { languages } from "./languages.ts";
import { useState } from "react";
type EditorProps = {
  height: string;
  style?: React.CSSProperties;
  value?: string;
  link: string;
};
export function ProgramEditor(props: EditorProps) {
  const [language, setLanguage] = useState<string>("C");
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
          },
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "2px solid #e3e3e3",
          height: "4rem",
        }}
      >
        {/*
        言語を選択するボタン
        x選択肢を上方向に表示
        */}
        <select
          style={{
            fontSize: "1.5rem",
            padding: "0.2rem 0.6rem",
            margin: "0.2rem 0.6rem",
            backgroundColor: "none",
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
            width: "6rem",
            height: "3rem",
            border: "none",
            fontSize: "1.4rem",
          }}
        >
          提出 ▶︎
        </button>
      </div>
    </div>
  );
}
