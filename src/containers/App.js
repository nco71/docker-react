import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor( props ) { 
    super( props );
    console.log( "[App.js] Inside Constructor", props );
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()" );
  }
 
  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()" );
  } 
 
  componentWillReceiveProps( nextProps ) {
    console.log("[UPDATE App.js] Inside componentWillReceiveProps()", nextProps)
  }

  //shouldComponentUpdate( nextProps , nextState ) {
    //console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps, nextState )
    //return nextState.persons !== this.persons || 
      //nextState.showPersons !== this.showPersons;
  //}

  componentWillUpdate(nextProps, nextState ) {
    console.log("[UPDATE App.js] Inside componentWIllUpdate()", nextProps, nextState )
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()")
  }
 
 
  state = {
    persons: [
      { id:"name1", name:'Cedric', age: 38 },
      { id:"name2", name:'Sherry', age: 50 }
    ],
    showPersons: false,
    toggleClicked: 0
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  toggleRenderHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }


  render () {

    console.log( "[App.js] Inside render()" );
    let persons = null;
    
    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleRenderHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App)
