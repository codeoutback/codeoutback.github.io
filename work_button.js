'use strict';

const e2 = React.createElement;


class WorkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="work.html";
    }

    return e2(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Work History'
    );
  }
}
const domContainer2 = document.querySelector('#work_button_container');
ReactDOM.render(e2(WorkButton), domContainer2);
