import React from 'react';
import Button from './Button';

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type='text' />

      <label>🧍‍♀️ Your expense</label>
      <input type='text' />

      <label>👫 X's expense</label>
      <input type='text' disabled />

      <label>🤑 Who is paying the bill</label>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
