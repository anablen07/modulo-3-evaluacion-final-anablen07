import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/fetchData';
import CharacterList from './CharacterList';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';
import logo from '../images/logo.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.state = {
      data: [],
      value: ''
    }
  }

  componentDidUpdate() {
    localStorage.setItem('Info', JSON.stringify(this.state.value))
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        console.log(data);
        this.setState({
          data: data.results
        });
      })
    
      const info = JSON.parse(localStorage.getItem('Info'))
      if (info !== null) {
        this.setState({
          value: info
        })
        
      }
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })
  }

  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const results = this.state.data;
    const characterObject = results.find(characterObject => characterObject.id === routeId);
      
      if (characterObject) {
        return (<CharacterDetail characterObject={characterObject}/>);
      } else {
        return <p className="error-message">El personaje que buscas no existe</p>
      }

    }
  
  render() {

    return (
      <div className="App">
        <img className='logo' src={logo} alt={logo.name}></img>
        <Switch>
          <Route exact path="/">
            <Filter handleInputValue={this.handleInputValue} inputValue={this.state.value} />
            <CharacterList results={this.state.data} inputValue={this.state.value} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
