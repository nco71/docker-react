import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Aux.js'

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;

    if (props.persons.length <= 1) {
      assignedClasses.push( classes.red );
    }

    if (props.persons.length === 0) {
      assignedClasses.push( classes.bold );
    }
    
    if (props.showPersons) {
      btnClass= [classes.Button, classes.red].join(' ');

    }


  return (
   <Aux>
     <h1>Hi, I'm a React App</h1>
     <p className={assignedClasses.join(' ')}>This is Really working!</p>
     <button
       className={btnClass}
       onClick={props.clicked}>Toggle Person
     </button>
   </Aux>
  );
};

export default cockpit;

