import React, { Component } from 'react';
import axios from 'axios';

import Photo from './photo/Photo';
import * as apiUrls from '../apiUrls';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
    }
  }

  componentDidMount() {
    console.log('Thank you so much for taking the time to look through this! I can be reached at hello@chantalecodes.com')
    this.generateCollection();
  }

  generateCollection = () => {
    axios.get(apiUrls.CITIES_COLLECTION).then((res) => {
      this.setState({
        collection: res.data,
      });
    });
  }

  render() {

    const { collection } = this.state;
    return (
      <div>
        <Photo collection={collection} />
      </div>
    )
  }
}

