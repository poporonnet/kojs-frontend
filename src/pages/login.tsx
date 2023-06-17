import { Header } from "../components/header";
import "../css/login.css";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
export function Login() {
  return (
    <div className={"page"}>
      <Header page={"login"} />
      <div id={"login"}>
        <div id={"login-form"}>
          <h1>ログイン</h1>
          <div className={"input"}>
            <label htmlFor={"text"}>ユーザー名</label>
            <input type={"text"} id={"text"} className={"text"}/>
          </div>
          <div className={"input"}>
            <label htmlFor={"password"}>パスワード</label>
            <input type={"password"} id={"password"} className={"text"}/>
          </div>
          <div className={"create-account"}>
            <p>アカウントがありませんか?<Link to={"/create-account"} className={"create-account-link"}>アカウントを作成</Link></p>
          </div>
          <input type={"submit"} className={"submit"} value={"ログイン"} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
