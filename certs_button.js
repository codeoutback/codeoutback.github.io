'use strict';

const e3 = React.createElement;

class CertsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="certs.html";
    }

    return e3(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Certifications'
    );
  }
}
const domContainer3 = document.querySelector('#certs_button_container');
ReactDOM.render(e3(CertsButton), domContainer3);
