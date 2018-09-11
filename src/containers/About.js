import React, { Component } from "react";
import "./About.css";
import { API } from "aws-amplify";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  notes() {
    return API.get("notes", "/notes");
  }



  render() {
    return (
      <div className="About ">
        <p>
          Hey Pedro, homework completed
        </p>
      </div>
    );
  }
}
