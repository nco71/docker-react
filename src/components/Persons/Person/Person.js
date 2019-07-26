import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor( props ) { 
    super( props );
    console.log( "[Person.js] Inside Constructor", props );
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()" );
  }
 
  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()" );
    if(this.props.position === 0 ) {
      this.inputElement.current.focus();
    }
  } 
 
  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps)
  }
    
  render () {
    console.log( "[Person.js] Inside render()" );

    return (
            <Aux>
              <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
              <p>{this.props.children}</p>
              <input
                ref={this.inputElement}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
           )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func 
}

export default withClass(Person, classes.Person);

