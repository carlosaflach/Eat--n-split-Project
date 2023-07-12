import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Button from './Button';
import { IFriend } from '../App';

interface IFrormAddFriend {
  handleAddFriend: (friend: IFriend) => void;
}

const FormAddFriend: FC<IFrormAddFriend> = ({ handleAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: IFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    handleAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label htmlFor='name'>👫 Friend name</label>
      <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor='image'>🌄 Image URL</label>
      <input type='text' id='image' value={image} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
