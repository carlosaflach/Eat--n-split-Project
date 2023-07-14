import React, { FC, useEffect, useState } from 'react';
import Button from './Button';
import { IFriend } from '../App';

interface IFomSplitBill {
  selectedFriend: IFriend;
}

const FormSplitBill: FC<IFomSplitBill> = ({ selectedFriend }) => {
  const [bill, setBill] = useState<string | number>('');
  const [paidByUser, setPaidByUser] = useState<string | number>('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const paidByFriend: string | number = typeof bill === 'number' && typeof paidByUser === 'number' ? bill - paidByUser : '';

  useEffect(() => {
    setBill('');
    setPaidByUser('');
    setWhoIsPaying('user');
  }, [selectedFriend]);

  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type='text' value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>🧍‍♀️ Your expense</label>
      <input type='text' value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value > bill ? paidByUser : Number(e.target.value)))} />

      <label>👫 {selectedFriend.name} expense</label>
      <input type='text' disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
