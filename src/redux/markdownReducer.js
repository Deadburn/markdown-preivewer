// Redux Action Types
const ENTER_TEXT = 'enter_text';
const TOGGLE_HELP = 'toggle_help;'

// Actions

export const enterText = (rawText) => {
  return {
    type: ENTER_TEXT,
    payload: rawText,
  };
};

export const showHelp = () => {
    console.log("sadas");
  return {
    type: TOGGLE_HELP,
  };
};

// Reducers
const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

const INIT_STATE = {
  textCurrent: 'this is user input',
  textUser: 'this is user input',
  textHelp: help,
  isShowingHelp: false,
};

export const markDownReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ENTER_TEXT:
      return {
        ...state,
        textCurrent: action.payload,
        textUser: action.payload,
      };
    case TOGGLE_HELP: {
      // if help is already activated, hide it and show user input
      if (state.isShowingHelp) {
        return {
          ...state,
          textCurrent: state.textUser,
          isShowingHelp: false,
        }
      }
      // if help is not activated, hide user input and show help
      return {
        ...state,
        textCurrent: state.textHelp,
        isShowingHelp: true,
      }
    }
    default:
      return state;
  }
};