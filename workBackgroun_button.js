'use strict';

const e = React.createElement;

class WorkBackgrounButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="workBackgroun.html";
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'About Me'
    );
  }
}
const domContainer = document.querySelector('#workBackgroun_button_container');
ReactDOM.render(e(WorkBackgrounButton), domContainer);
