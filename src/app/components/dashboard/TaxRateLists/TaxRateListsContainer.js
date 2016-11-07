import React, {Component} from 'react';
import {Link} from 'react-router';
import { TAXRATELISTS_ENDPOINT } from '../../../util/urls';
import {Row, Col, Button, Table} from 'react-bootstrap';


class TaxRateLists extends Component {

  get taxRateListNodes() {
    return this.props.taxRateLists.map((taxRateList) => {
      return (
        <li key={taxRateList.id}>
          <Link to={`/dashboard/taxRateLists/${taxRateList.id}`}>
            {taxRateList.title}
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Tax rate lists</h3>
        <ul>
          {this.taxRateListNodes}
        </ul>
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
    fetch(TAXRATELISTS_ENDPOINT).then((res) => {
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
        <Link to="/dashboard/addTaxRateLists/">
          <Button className="back" bsStyle="primary" bsSize="small">Add Tax Rate List</Button>
        </Link>
        { this.state.taxRateLists && <TaxRateLists taxRateLists={this.state.taxRateLists} /> }
      </div>
    )
  }

}



export default TaxRateListsContainer;
