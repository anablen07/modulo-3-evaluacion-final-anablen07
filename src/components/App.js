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

  /*/*la función handleInputValue (función de formularios) es la función controladora de ese elemento y, ¿qué es lo que hace? cada vez que detecta un cambio en lo que escribo en el formulario, se ejecuta y me actualiza el valor del value y por ello le digo que value va a valer lo que me mande filter a través de props.value por lifting.Al valor que nos manda lo llamamos inputValue, se lo pasamos a la función y a continuación nos setea (actualiza) el estado con lo que ponga en inputValue.Ahora, abajo, a mi componente Filter le envío esta función para que la ejecute (no olvidarnos de bindearla)
  /*cada vez que cambie valor del value, se ejecutará y recogerá el valor cambiado*/

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
      return (<CharacterDetail characterObject={characterObject} />);
    } else {
      return <p className="error-message">El personaje que buscas no existe</p>
    }

  }

  render() {
    const { value, data } = this.state;
    return (
      <div className="App">
        <img className='logo' src={logo} alt={logo.name}></img>
        <Switch>
          <Route exact path="/">
            <Filter handleInputValue={this.handleInputValue} inputValue={value} />
            <CharacterList results={data} inputValue={value} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
