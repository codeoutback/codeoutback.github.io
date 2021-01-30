'use strict';

const e1 = React.createElement;


class EduButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="edu.html";
    }

    return e1(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Education'
    );
  }
}
const domContainer1 = document.querySelector('#edu_button_container');
ReactDOM.render(e1(EduButton), domContainer1);
