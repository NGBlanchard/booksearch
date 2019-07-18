import React from 'react';
import '../styles/Search.css'

class Search extends React.Component {
  state = { 
      term: '',
      filter: '' 
  };
  
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  onFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  };

  onFormSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }


  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Search by Title, Author, Topic, Etc.</label>
          <input 
            type="text"
            value={this.state.term}
            onChange={this.onInputChange} 
            
            />
        </div>
        
        <div className="filters">
          <label>Filter Results</label>
          <select name="jumpmenu" onChange={this.onFilterChange}>
            <option value="" onClick={this.onFilter}>None</option>
            <option value="free-ebooks" onClick={this.onFilter}>Free eBooks</option>
            <option value="paid-ebooks" onClick={this.onFilter}>Paid eBooks</option>
          </select>
        </div>
        
        
        <button 
            className="ui pink animated button" 
            tabIndex="0"
            type="submit">
          <div className="visible content">Search</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
          </div>
        </button>

      </form>
      </div>
    );
  };
}

export default Search;