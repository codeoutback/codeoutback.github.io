'use strict';

const e4 = React.createElement;

class ProjectsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="projects.html";
    }

    return e4(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      //Displays the name of the Button
      'Projects'
    );
  }
}
const domContainer4 = document.querySelector('#projects_button_container');
ReactDOM.render(e4(ProjectsButton), domContainer4);
