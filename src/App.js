import "./App.scss";
import { useSelector, useDispatch} from "react-redux"
import {marked} from 'marked'
import { enterText, showHelp } from "./redux/markdownReducer";

function App() {

  const a = useSelector((state) => state)
  const textCurrent = useSelector((state) => state.counter.textCurrent)
  const isShowingHelp = useSelector((state) => state.counter.isShowingHelp)

  const dispatch = useDispatch()

  console.log(a);
  console.log(textCurrent);
  const parsedText = marked.parse(textCurrent);


  function createMarkup() {
    return {__html: parsedText};
  }
  
  return (
    <div>
      <div className="main-content">
        <header>
          <h1 className="app-title">Markdown Previewer</h1>
          <div 
            onClick={() => {
              dispatch(showHelp())
            }}
            className={`help-button ${isShowingHelp && 'active'}`}>
            <i className="fa fa-question" aria-hidden="true"></i>
          </div>
        </header>

        <div className="text-panels">
          <textarea
            value={textCurrent}
            onChange={(e) => dispatch(enterText(e.target.value))}
            className="text-panel-left"
            // readOnly={isShowingHelp}
          ></textarea>
          <div dangerouslySetInnerHTML={createMarkup()} />
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
