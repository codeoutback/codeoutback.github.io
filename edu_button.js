'use strict';

//This is creating a React element named e1 and it is of constant type  
const e1 = React.createElement;

//This creates a react componnent named EduButton and it inherits the React.Component named e1 that is the parent and the EduButton is the child
class EduButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

/*If the about me button is clicked, take me to aboutMe.html page. The above component starts the state as false which is liked. Then 
the below code assigns the html file and the onClick makes it so if clicked, go to that page*/
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

//This makes it so domContainer1 is assigned to the edution button
const domContainer1 = document.querySelector('#edu_button_container');

/*This is the final piece. The ReactDom takes 2 arguments the e1(EduButton) and the domContainer1. This is saying whats gonna happen and where
is it going to happen.*/
ReactDOM.render(e1(EduButton), domContainer1);
