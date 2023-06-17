import { Header } from "../components/header";
import "../css/create-account.css"
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
export function CreateAccount(){
  return (
    <div className={"page"}>
      <Header page={"create-account"} />
      <div id={"create-account"}>
        <div id={"create-account-form"}>
          <h1>アカウント作成</h1>
          <div className={"input"}>
            <label htmlFor={"text"}>ユーザーネーム</label>
            <input type={"text"} id={"text"} className={"text"}/>
          </div>
          <div className={"input"}>
            <label htmlFor={"email"}>メールアドレス</label>
            <input type={"email"} id={"email"} className={"text"}/>
          </div>
          <div className={"input"}>
            <label htmlFor={"password"}>パスワード</label>
            <input type={"password"} id={"password"} className={"text"}/>
          </div>
          <div className={"input"}>
            <p><Link to={"kojs-term-of-service"}>利用規約</Link>を読んだ上でアカウントを作成してください。</p>
          </div>
          <input type={"submit"} className={"submit"} value={"アカウント作成"} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
