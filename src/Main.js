import * as React from 'react';
import UseTransition from './UseTransition';
import { UseInsertion } from './UseInsertion';

export default function Main() {
  return (
    <>
      <div>
        <h1>useTransition() and useInsertion() hook</h1>

        <UseInsertion />
        <h2>useTransition()</h2>
        <UseTransition />
      </div>
    </>
  );
}
