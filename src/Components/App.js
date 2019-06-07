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

