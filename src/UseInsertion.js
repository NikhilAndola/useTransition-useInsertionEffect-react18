import React from 'react';

export const UseInsertion = () => {
  return (
    <>
      <h3>useInsertion() Definition:</h3>
      <section>
        <strong>
          <code>
            <u>useInsertionEffect(didUpdate);</u>
          </code>
        </strong>
        <p>
          The signature is identical to useEffect, but it fires synchronously
          before all DOM mutations. Use this to inject styles into the DOM
          before reading layout in useLayoutEffect. Since this hook is limited
          in scope, this hook does not have access to refs and cannot schedule
          updates.
        </p>
        <strong>Note: </strong>
        <em>
          useInsertionEffect should be limited to css-in-js library authors.
          Prefer useEffect or useLayoutEffect instead.
        </em>
      </section>
    </>
  );
};
