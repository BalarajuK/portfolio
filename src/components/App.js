import React, {Component} from 'react';
import Config from '../constants/config.json';
import Header from './Header.js';

class App extends Component {
    state = {
        Dark : false
    }
    componentDidMount() {
        document.title = Config.Name + "'s Portfolio"
    }

    render() {
        return <div className="App">
            <Header className="Header" dark={this.state.Dark}>{Config.Name}</Header>
        </div>;
    }
}

export default App;