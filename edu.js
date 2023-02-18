class ListEdu extends React.Component {
    render() {
      return (
        <div className="education-list">
          <h1>My Education{this.props.name}</h1>
          <ul>
            <li>Associates</li>
            <li>Bachelors</li>
          </ul>
        </div>
      );
    }
  }

  return React.createElement('div', {className: 'education-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
  