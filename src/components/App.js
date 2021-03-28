import React, {Component} from 'react';
import Config from '../constants/config.json'

class App extends Component {
    render() {
        return <div className="App">
            Hello World
            <pre className="border rounded bg-light p-2">{JSON.stringify(Config, null, 2)}
            </pre>
        </div>;
    }
}

export default App;