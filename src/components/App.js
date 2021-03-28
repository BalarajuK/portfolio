import React, {Component} from 'react';
import Config from '../constants/config.json';
import Header from './Header.js';

class App extends Component {
    state = {
        Dark: false
    }

    componentDidMount() {
        document.title = Config.Name + "'s Portfolio"
    }

    render() {
        return <div className="App">
            <Header className="Header fixed-top" dark={this.state.Dark}
                    items={Config.Sections.map(section => (
                        <a
                            className="nav-link"
                            target={section.Link ? "_blank" : null}
                            rel="noopener"
                            href={section.Link ? section.Link : "#" + section.Name}
                            key={section.Name}
                        >

                            {section.Name}
                        </a>
                    ))}
            >
                {Config.Name}
            </Header>
            {Config.Sections.map(section => section.Link ? null : (
                <section id={section.Name} key={section.Name}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <article>
                                    <h2>{section.Name}</h2>
                                    <p>{section.Content}</p>
                                </article>

                            </div>

                        </div>

                    </div>

                </section>
            ))}
        </div>;
    }
}

export default App;