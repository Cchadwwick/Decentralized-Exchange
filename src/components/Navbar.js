import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accountSelector } from '../store/selectors';

export class Navbar extends Component {
  render() {
    const { account } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <a className="navbar-brand" href="/#"><strong>DexiFi</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ml-auto">
            <h4 className="nav-address">Account:</h4>
            <li className="nav-item">
              <a
                className="nav-link nav-link-custom"
                href={`https://etherscan.io/address/${account}`}
                target="_blank"
                rel="noopener noreferrer"
              >
               <strong>{account}</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Navbar);
