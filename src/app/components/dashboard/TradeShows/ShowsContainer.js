import React, {Component} from 'react';
import {Link} from 'react-router';
import { TRADESHOWS_ENDPOINT } from '../../../util/urls';
import {Row, Col, Button, Table} from 'react-bootstrap';


class TradeShows extends Component {

  get tradeShowNodes() {
    return this.props.tradeShows.map((tradeShow) => {
      return (
        <tr key={tradeShow.id}>
          <td>{tradeShow.city}</td>
          <td>{tradeShow.state}</td>
          <td>{tradeShow.taxRateListId}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Trade Shows</h3>
        <Table>
          <thead>
            <tr>
              <td>City</td>
              <td>State</td>
              <td>Tax Rate</td>
            </tr>
          </thead>
          <tbody>
          {this.tradeShowNodes}
          </tbody>
        </Table>
      </div>
    );
  }
}

TradeShows.propTypes = {
  tradeShows: React.PropTypes.array
};




class TradeShowsContainer extends Component {

  constructor() {
    super();
    this.state = {
      tradeShows: null
    };
  }

  componentDidMount() {
    this.fetchTradeShows();
  }

  fetchTradeShows() {
    fetch(TRADESHOWS_ENDPOINT).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        tradeShows: json
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
        { this.state.tradeShows && <TradeShows tradeShows={this.state.tradeShows} /> }
      </div>
    )
  }

}



export default TradeShowsContainer;
