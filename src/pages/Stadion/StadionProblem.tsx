import "../../css/stadion-problem.css";
import "../../components/markdown";
import { Markdown } from "../../components/markdown";
import { ProgramEditor } from "../../components/editor";

export function StadionProblem() {
  return (
    <>
      <div id={"stadion-problem"}>
        <main className={"main"}>
          <div className={"problem"}>
            <h2>{sampleproblem.title}</h2>
            <Markdown value={sampleproblem.value} />
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              borderLeft: "2px solid #ccc",
              minHeight: "70px",
            }}
          >
            <ProgramEditor link={"link"} />
          </div>
        </main>
      </div>
    </>
  );
}
const sampleproblem = {
  title: "A-足し算",
  value: `
huge $\\Huge AB$

$\\displaystyle\\sum_{i=1}^n$

$\\sqrt{3x-1}+(1+x)^2$

$$\\begin{array}{c}

\\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} &
= \\frac{4\\pi}{c}\\vec{\\mathbf{j}}    \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\

\\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\

\\nabla \\cdot \\vec{\\mathbf{B}} & = 0

\\end{array}$$

$f(x) = \\frac{1}{\\sqrt {2\\pi \\sigma^2}} \\exp\\Biggl(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\Biggr) \\qquad (-\\infty<x<\\infty)$
`,
};
