import { useState } from "react";
import "./App.scss";
import { useSelector, useDispatch} from "react-redux"

function App() {
  const [enterText, setEnterText] = useState("");
  const a = useSelector((state) => state)
  const textCurrent = useSelector((state) => state.counter.textCurrent)
  const textUser = useSelector((state) => state.counter.textUser)
  const textHelp = useSelector((state) => state.counter.textHelp)
  const isShowingHelp = useSelector((state) => state.counter.isShowingHelp)

  console.log(a);

  
  return (
    <div>
      <div className="main-content">
        <header>
          <h1 className="app-title">Markdown Previewer</h1>
          <div className="help-button">
            <i className="fa fa-question" aria-hidden="true"></i>
          </div>
        </header>

        <div className="text-panels">
          <textarea
            value="textCurrent"
            onChange={(e) => setEnterText(e.target.value)}
            className="text-panel-left"
            readOnly={true}
          ></textarea>
          <div ></div>
        </div>

        <footer>
          <div>
            2017, created by{" "}
            <a target="blank" href="https://github.com/GuRuGuMaWaRu">
              Peter Krevenets
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
