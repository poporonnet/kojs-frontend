import { Link } from "react-router-dom";
import "../css/header.css";
import * as React from 'react';
type HeaderProps = {
  page: string;
};

const isLogin = false;
const accountimg = "https://avatars.githubusercontent.com/u/75256761?v=4";

export function Header(props: HeaderProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const primarycolor =
    props.page === "home"
      ? "#FC3030"
      : props.page === "CodeAdventure"
        ? "#FC9230"
        : props.page === "stadion"
          ? "#3082FC"
          : props.page === "Playground"
            ? "#709EF8"
            : props.page === "help"
              ? "#FC3030"
              : props.page === "mypage"
                ? "#BB30FC"
                : "black";
  return (
    <>
      <header>
        <Link to={"/"} className={"Link"}>
          <p
            style={{
              color: primarycolor,
              fontSize: "1.9rem",
              fontWeight: "bold",
              float: "left",
            }}
          >
            Kemomimi
          </p>
        </Link>
        <div className={"links"}>
          <Link to={"/codeadventure"} className={"Link"}>
            {props.page === "CodeAdventure" ? (
              <p>
                Code<span style={{ color: "#FC9230" }}>Adventure</span>
              </p>
            ) : (
              <p>CodeAdventure</p>
            )}
          </Link>
          <Link to={"/stadion"} className={"Link"}>
            {props.page === "Stadion" ? (
              <p>
                <span style={{ color: "#3082FC" }}>Sta</span>dion
              </p>
            ) : (
              <p>Stadion</p>
            )}
          </Link>
          <Link to={"/playground"} className={"Link"}>
            {props.page === "Playground" ? (
              <p>
                <span style={{ color: "#709EF8" }}>Play</span>ground
              </p>
            ) : (
              <p>Playground</p>
            )}
          </Link>
          <Link to={"/help"} className={"Link"}>
            {props.page === "help" ? (
              <p style={{ color: "#FC3030" }}>help</p>
            ) : (
              <p>help</p>
            )}
          </Link>
        </div>
        <div id={"account"} onClick={() => setOpen(!open)}>
          {isLogin ? (
            <button className={"logined"}>
              <img src={accountimg} alt={"account"} />
            </button>
          ) : (
            <Link to={"/login"} className={"Link"}>
              <div className={"notlogined"}>
                <p>ログイン</p><span className="material-symbols-outlined">login</span>
              </div>
            </Link>
          )}
        </div>
        {open && (
          <div className={"accountmenu"}>
            <Link to={"/mypage"} className={"Link"}>
              <p>マイページ</p>
            </Link>
            <Link to={"/setting"} className={"Link"}>
              <p>設定</p>
            </Link>
            <Link to={"/logout"} className={"Link"}>
              <p>ログアウト</p>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
