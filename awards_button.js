'use strict';

const awarButn = React.createElement;


class AwarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the awards button is clicked, take me to awards.html page
  render() {
    if (this.state.liked) {
      location.href="award.html";
    }

    return awarButn(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Awards'
    );
  }
}
const domContainerAwarButn = document.querySelector('#awards_button_container');
ReactDOM.render(awarButn(AwarButton), domContainerAwarButn);