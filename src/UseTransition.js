import * as React from 'react';
import './style.css';
import { Loader } from './Loader/Loader';

export default function UseTransition() {
  const [isPending, startTransition] = React.useTransition();
  const [input, setInput] = React.useState('');
  const [list, setList] = React.useState([]);
  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending ? (
        <Loader />
      ) : (
        list.map((item, ind) => <div key={ind}>{item}</div>)
      )}
    </div>
  );
}
