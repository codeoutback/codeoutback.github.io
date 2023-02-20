'use strict';

const hobby = React.createElement;


class HobbyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

//If the about me button is clicked, take me to aboutMe.html page
  render() {
    if (this.state.liked) {
      location.href="hobby.html";
    }

    return hobby(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Hobbies'
    );
  }
}
const domContainerHobby = document.querySelector('#hobby_button_container');
ReactDOM.render(hobby(HobbyButton), domContainerHobby);