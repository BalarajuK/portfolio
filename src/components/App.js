import React, {Component} from 'react';
import Config from '../constants/config.json';
import Header from './Header.js';

class App extends Component {
    componentDidMount() {
        document.title = Config.Name + "'s Portfolio"
    }

    render() {
        return <div className="App">
            <Header>{Config.Name}</Header>
        </div>;
    }
}

export default App;