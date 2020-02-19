import React, { Component } from "react";
import "./styles/Badges.css";
import BadgeList from "../components/badge/BadgeList";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class Badges extends Component {
  state = {
    page: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.page}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        page: this.state.page + 1,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err,
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container" style={{height: '20vh'}}>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__list">
            <div className="Badges__container">
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">
                  New Badge
                </Link>
              </div>
              <BadgeList badges={this.state.data} />
            </div>
            {!this.state.loading && (
              <button
                className="btn btn-primary mb-5 mt-2 ml-3"
                onClick={() => this.fetchCharacters()}
              >
                Load More
              </button>
            )}
          </div>

          {this.state.loading && (
            <div className="text-center">
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
