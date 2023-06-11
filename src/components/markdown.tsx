import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";
import "../css/mdstyle.css";
type Props = {
  value: string;
};

// 書き方 https://katex.org/docs/supported.html
// 参考になるかも http://waylonflinn.github.io/markdown-it-katex/
export const Markdown: React.FC<Props> = (props: Props) => {
  const md = new MarkdownIt();
  md.use(mk, { throwOnError: false, errorColor: " #cc0000" });
  const s = md.render(props.value);
  return (
    <>
      <div style={{ color: "#777788" }}>
        <div dangerouslySetInnerHTML={{ __html: s }}></div>
      </div>
    </>
  );
};
