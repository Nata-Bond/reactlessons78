import React, { Component } from "react";
import tvAPI from "../services/tv-api";
import routes from "../routes";

export default class ShowDetails extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    tvAPI
      .fetchShowDetails(this.props.match.params.showId)
      .then((show) => this.setState({ show }));
  }

  handleGoBack = () => {
    console.log("back");

    console.log(this.props);
    const { state } = this.props.location;
    console.log(state);

    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.shows);
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back to shows
        </button>
        <hr />
        {show && (
          <>
            <img src={show.image.medium} alt={show.name} />
            <h1>{show.name}</h1>
          </>
        )}
      </div>
    );
  }
}
