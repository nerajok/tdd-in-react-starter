import JokeGenerator from "./jokeGenerator";
import React from 'react';
import ReactDOM from 'react-dom';

// const App =() => (
//     <div>
//         <JokeGenerator />
//     </div>
// );

ReactDOM.render(
    <React.StrictMode>
        <JokeGenerator/>
    </React.StrictMode>,
    document.getElementById('root')
);