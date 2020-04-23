import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/fetchData';
import CharacterList from './CharacterList';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail= this.renderCharacterDetail.bind(this);
    this.state = {
      data: [],
      value: ''
    }
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        console.log(data);
        this.setState({
          data: data.results
        });
      })
      .catch(function (error) {
        console.log('Hubo un problema al obtener los datos:' + error.message);
      });
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })
  }

  renderCharacterDetail(props) {
    const routeId= props.match.params.id;
    const results = this.state.data;
    for(let characterObject of results){
      if (characterObject.id === parseInt(routeId))
      return <CharacterDetail characterObject={characterObject}/>

    }
  }

  render(){

    return (
      <div className="App">
       <Switch>
        <Route exact path="/">
        <Filter handleInputValue={this.handleInputValue} />
        <CharacterList results={this.state.data} inputValue={this.state.value}/>
        </Route>
        <Route path="/character/:id" render={this.renderCharacterDetail}>
        </Route>
        </Switch> 
      </div>
    );
  }
}

export default App;
