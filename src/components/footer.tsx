import "../css/footer.css";
import poporonLogo from "/footerlogo.svg";
export function Footer() {
  return (
    <footer>
      <div className={"content"}>
        <ul>
          <li>利用規約</li>
          <li>よくある質問</li>
        </ul>
        <ul>
          <li>連絡先</li>
        </ul>
      </div>
      <div className={"logo"}>
        <img src={poporonLogo} alt={"PoporonNetworkのロゴ"} />
      </div>
    </footer>
  );
}
