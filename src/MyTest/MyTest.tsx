import React from 'react';
import styles from './MyTest.module.css';
import { Person } from '../models/Person.model';

type MyProps = {
  person?: Person;
};

class MyTest extends React.Component<MyProps, any> {

  constructor(props: MyProps) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.person?.firstName + ' ' + this.props.person?.lastName + ' ' + this.props.person?.age}
      </div>
    );
  }
}

export default MyTest;
