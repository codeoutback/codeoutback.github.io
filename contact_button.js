'use strict';

const e2 = React.createElement;

class ContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="contact.html";
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Contact Me'
    );
  }
}
const domContainer2 = document.querySelector('#contact_button_container');
ReactDOM.render(e(ContactButton), domContainer2);
