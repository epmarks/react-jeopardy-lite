import React, { Component } from "react";
import JeopardyService from "../../service/jeopardyService";
class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: "",
    };
  }

  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  componentDidMount() {
    this.getNewQuestion();
  }

  updateScore = (event) => {
    event.preventDefault();
    let dataAnswer = this.state.data.answer.toLowerCase();
    let userAnswer = this.state.answer.toLowerCase();

    if (dataAnswer === userAnswer) {
      this.setState((state, props) => ({
        score: this.state.score + this.state.data.value,
        answer: "",
      }));
    } else {
      this.setState((state, props) => ({
        score: this.state.score - this.state.data.value,
        answer: "",
      }));
    }

    this.getNewQuestion();
  };

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  render() {
    let categoryTitle = "loading";
    if (this.state.data.category) {
      categoryTitle = this.state.data.category.title;
    }

    return (
      <div>
        <h4>Question: {this.state.data.question}</h4>

        <h4>Value: {this.state.data.value}</h4>

        <h4>Category: {categoryTitle}</h4>

        <form onSubmit={this.updateScore}>
          <label>Enter Answer</label>
          <input
            type="text"
            name=""
            value={this.state.answer}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <h4>Score: {this.state.score}</h4>
      </div>
    );
  }
}
export default Jeopardy;
