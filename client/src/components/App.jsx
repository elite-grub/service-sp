import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const API_URL = 'http://localhost:3000/api/reviews/1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(myJson => {
        this.setState({
          isLoaded: true,
          data: myJson,
        });
      });
  }

  render() {
    let { isLoaded, data } = this.state;
    if (!isLoaded) {
      return (
        <div>
          Loading..
        </div>
      )
    }
    return (
      <div>
        <ReviewsList
          reviews={data}
        />
      </div>
    );
  };
}

export default App;