import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/fetchData';
import CharacterList from './CharacterList';
import Filter from './Filter';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue=this.handleInputValue.bind(this)
    this.state = {
      data:[],
      value:''
    }
  }

  componentDidMount(){
    fetchData()
    .then(data => {
      console.log(data);
      this.setState({
        data:data.results
      });
    })
    .catch(function(error) {
      console.log('Hubo un problema al obtener los datos:' + error.message);
    });
  }

  handleInputValue(inputValue){
    this.setState({
      value: inputValue
    })
  }

  render() {
   
    return (
      <div className="App">
        <Filter handleInputValue={this.handleInputValue}/>
        <CharacterList results={this.state.data} inputValue={this.state.value}/>
      </div>
    );
  }
}

export default App;
