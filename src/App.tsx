import React, { useState } from 'react';
import FriendsList from './Components/FriendsList';
import FormAddFriend from './Components/FormAddFriend';
import Button from './Components/Button';
import FormSplitBill from './Components/FormSplitBill';

export interface IFriend {
  id: string;
  name: string;
  image: string;
  balance: number;
}

const initialFriends: IFriend[] = [
  {
    id: '118836',
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: '933372',
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: '499476',
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowAddFriendForm = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (friend: IFriend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriendForm}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
