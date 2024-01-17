'use client';
import React, { useState } from 'react';
import Button from '../button/Button';

const Input = () => {
  const [toDo, setToDo] = useState('');
  const onChange = (e: any) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (toDo == '') {
      return;
    }
    // console.log(toDo);
    setToDo('');
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={onChange}
          value={toDo}
        />
        <Button variant="contained">Add</Button>
      </form>
    </>
  );
};

export default Input;
