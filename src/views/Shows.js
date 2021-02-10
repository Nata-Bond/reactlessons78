import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvAPI from "../services/tv-api";
import Searchbox from "../Searchbox";
import getQueryParams from "../utils/getQueryParams";
export default class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchShows(query);
      return;
    }
    this.fetchShows("cups");
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchShows(nextQuery);
    }
  }

  fetchShows = (query) => {
    tvAPI.fetchShowWithQuery(query).then((shows) => this.setState({ shows }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      // или...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { shows } = this.state;
    const { match } = this.props;
    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {shows.length > 0 && (
          <>
            <h1> Shows View </h1>
            <ul>
              {shows.map((show) => (
                <li key={show.id}>
                  <Link
                    to={{
                      pathname: `${match.url}/${show.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {show.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
