import React, {Component} from 'react';
import {Link} from 'react-router';
import { TRADESHOWS_ENDPOINT } from '../../../util/urls';
import {Row, Col, Button, Table} from 'react-bootstrap';


class TaxRateLists extends Component {

  get taxRateListNodes() {
    return this.props.taxRateLists.map((taxRateList) => {
      return (
        <tr key={taxRateList.id}>
          <td>{taxRateList.city}</td>
          <td>{taxRateList.state}</td>
          <td>{taxRateList.taxRateListId}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Tax rate lists</h3>
        <Table>
          <thead>
          <tr>
            <td>City</td>
            <td>State</td>
            <td>Tax Rate</td>
          </tr>
          </thead>
          <tbody>
          {this.taxRateListNodes}
          </tbody>
        </Table>
      </div>
    );
  }
}

TaxRateLists.propTypes = {
  taxRateLists: React.PropTypes.array
};




class TaxRateListsContainer extends Component {

  constructor() {
    super();
    this.state = {
      taxRateLists: null
    };
  }

  componentDidMount() {
    this.fetchTaxRateLists();
  }

  fetchTaxRateLists() {
    fetch(TRADESHOWS_ENDPOINT).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        taxRateLists: json
      });
    }).catch((ex) => {
      console.log(ex);
    })
  }

  render() {
    return (
      <div>
        <Link to="/dashboard/addTradeShow/">
          <Button className="back" bsStyle="primary" bsSize="small">Add Trade Show</Button>
        </Link>
        { this.state.taxRateLists && <TaxRateLists taxRateLists={this.state.taxRateLists} /> }
      </div>
    )
  }

}



export default TaxRateListsContainer;
