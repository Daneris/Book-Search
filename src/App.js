import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      listOfBooks: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCWzdXRrMHydZuFr2Zy2f1Q5ffB9MOeGbQ")
      .then(response => response.json())

      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            listOfBooks: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error

          });
        }
      )
    }

  render() {
    return(
      <ul>
        {listOfBooks.map(book => (
          <li key={book.id}>
            {book.title}
            {book.authors}
          </li>
        ))}
      </ul>



    );
  }
}


export default App;
