'use strict';

const e5 = React.createElement;

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

    return e5(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Contact Me'
    );
  }
}
const domContainer5 = document.querySelector('#contact_button_container');
ReactDOM.render(e5(ContactButton), domContainer5);
