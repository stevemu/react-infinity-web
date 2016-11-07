import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { TRADESHOWS_ENDPOINT } from '../../../util/urls';
import FieldGroup from '../../FieldGroup';
import {browserHistory} from 'react-router';


class AddShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      model: "",
      price: 0
    }
  }

  onModelChange(e) {
    this.setState({
      model: e.target.value
    })
  }
  onPriceChange(e) {
    this.setState({
      price: e.target.value
    })
  }


//todo
  handleSubmit(e) {
    e.preventDefault();
    const newShow = this.state;
    fetch(TRADESHOWS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newShow)
    }).then((res) => {
      // go back to product lists
      browserHistory.push("/dashboard/tradeShows");
    })
  }

  render() {
    return (
      <div>


      </div>

    );
  }
}

export default AddShow;
