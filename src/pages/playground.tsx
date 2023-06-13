import "../css/playground.css";
import { ProgramEditor } from "../components/editor";
import { Header } from "../components/header";
export function Playground() {
  return (
    <div id={"playground"}>
      <Header page={"Playground"} />
      <h1>Playground</h1>
      <main>
        <div className={"nanka"}>
          <div className={"input"}>
            <h3>Input</h3>
            <textarea className={"area"} />
          </div>
          <div className={"output"}>
            <h3>Output</h3>
            <textarea readOnly className={"area"} />
          </div>
        </div>
        <div className={"editor"}>
          <ProgramEditor link={"."} />
        </div>
      </main>
    </div>
  );
}
