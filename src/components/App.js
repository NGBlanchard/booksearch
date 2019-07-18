import React from 'react';
import Header from './Header';
import Search from './Search';
import googlebooks from '../apis/googlebooks';
import Results from './Results';

class App extends React.Component {
  state = { 
    booklist: [],
}

componentDidMount(){
  this.onTermSubmit('Ali Smith');
}


  onTermSubmit = async (term, filter) => {
    const response = await googlebooks.get('/volumes', {
      params: {
        q: term,
        filter: filter
      }
    });

    this.setState({ 
      booklist: response.data.items,
    });
  };
  
  render() {
    return (
      <div>
        <Header />
        <Search 
          onFormSubmit={this.onTermSubmit}
        />
        <Results booklist={this.state.booklist} />
      </div>
    );  
  };
}

export default App;