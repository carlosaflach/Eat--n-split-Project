import React, { FC } from 'react';
import Button from './Button';
import { IFriend } from '../App';

interface IFomSplitBill {
  selectedFriend: IFriend;
}

const FormSplitBill: FC<IFomSplitBill> = ({ selectedFriend }) => {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type='text' />

      <label>🧍‍♀️ Your expense</label>
      <input type='text' />

      <label>👫 {selectedFriend.name} expense</label>
      <input type='text' disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
