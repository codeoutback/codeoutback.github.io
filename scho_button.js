'use strict';

const e1 = React.createElement;


class Scho extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="schoCerts.html";
    }

    return e1(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Schooling'
    );
  }
}
const domContainer1 = document.querySelector('#Scho_button_container');
ReactDOM.render(e(SchoButton), domContainer1);
