import React from 'react';



class BookItem extends React.Component {


  

  render() {
    return(
      <div className="ui segment">
      <img alt={this.props.title} className="ui small left floated image" src={this.props.image} />
      <div className="content">
        <h2 className="title">{this.props.title}</h2>
        <h3 className="author">Author: {this.props.author}</h3>
        <h4 className="publisher">Published by {this.props.publisher}</h4>
        <h4 className="price">${this.props.price}</h4>
        <p>Description: <br/>
        {this.props.description}</p>
      </div>
    </div>
    );
  };
}

export default BookItem;