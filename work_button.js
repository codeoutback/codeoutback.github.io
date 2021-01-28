'use strict';

const e = React.createElement;

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="work.html";
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Background'
    );
  }
}
const domContainer = document.querySelector('#work_button_container');
ReactDOM.render(e(Work), domContainer);
