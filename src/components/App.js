import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/fetchData';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
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

  render() {
   
    return (
      <div className="App">
        <CharacterList results={this.state.data}/>
      </div>
    );
  }
}

export default App;
