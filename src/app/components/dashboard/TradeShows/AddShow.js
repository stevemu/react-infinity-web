import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {TRADESHOWS_ENDPOINT} from '../../../util/urls';
import FieldGroup from '../../FieldGroup';
import {browserHistory} from 'react-router';

import Form from 'react-jsonschema-form';

const schema = {
  // title: "NewTradeShow",
  type: "object",
  properties: {
    city: {type: "string", title: "City"},
    state: {type: "string", title: "State"}
  }
};

class AddShow extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(val) {
    var newShow = val.formData;
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
        <h2>New Trade Show</h2>

          <Form
            schema={schema}
            onChange={()=>{console.log('change');}}
            onSubmit={this.handleSubmit.bind(this)}

          />
        </div>



    );
  }
}

export default AddShow;
