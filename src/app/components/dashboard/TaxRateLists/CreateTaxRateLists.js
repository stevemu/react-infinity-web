import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import {TRADESHOWS_ENDPOINT} from '../../../util/urls';
import FieldGroup from '../../FieldGroup';
import {browserHistory} from 'react-router';
import _ from 'underscore';

import Form from 'react-jsonschema-form';

const schema = {
  title: "Add new rate for a state",
  type: "object",
  properties: {
    state: {type: "string", title: "State"},
    rate: {type: "number", title: "Rate"}
  }
};


class CreateTaxRateList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rates: {
        MA: 0.1,
        NY: 0.2,
        CA: 0.02
      }
    };

  }

  // handleSubmit(val) {
  //   var newShow = val.formData;
  //   fetch(TRADESHOWS_ENDPOINT, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newShow)
  //   }).then((res) => {
  //     // go back to product lists
  //     browserHistory.push("/dashboard/tradeShows");
  //   })
  // }

  getRateRows() {
    var nodes = _.map(this.state.rates, (rate, state) => {
      return (
        <tr key={state}>
          <td>{state}</td>
          <td>{rate}</td>
        </tr>
      );
    });

    return nodes
  }

  handleAddNewRateForState(val) {
    var rates = this.state.rates;
    rates[val.formData.state] = val.formData.rate;
    this.setState(rates);
  }

  render() {
    return (
      <div>
        <h2>New Tax Lists</h2>
        <Table>
          <thead>
            <tr>
              <th>State</th>
              <th>Rate %</th>
            </tr>
          </thead>
          <tbody>
          {this.getRateRows()}
          </tbody>
        </Table>
        <div className="sub-form">
          <Form schema={schema}
                onSubmit={this.handleAddNewRateForState.bind(this)}
          />
        </div>

      </div>

    );
  }
}

export default CreateTaxRateList;
