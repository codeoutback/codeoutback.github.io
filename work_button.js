'use strict';



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

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Background'
    );
  }
}
document.querySelector('#work_button_container');
ReactDOM.render(e(WorkButton), domContainer);
