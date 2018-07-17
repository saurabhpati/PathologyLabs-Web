import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
        return (
            <div>This is App.jsx</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));