'use strict';

const e = React.createElement;

class AboutMeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'href="aboutMe.html"';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'About Me'
    );
  }
}
const domContainer = document.querySelector('#aboutMe_button_container');
ReactDOM.render(e(AboutMeButton), domContainer);
