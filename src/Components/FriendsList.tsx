import React, { FC } from 'react';
import Friend from './Friend';
import { IFriend } from '../App';

interface IFriendsProps {
  friends: IFriend[];
  onSelection: (friend: IFriend) => void;
  selectedFriend: IFriend | null;
}

const FriendsList: FC<IFriendsProps> = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
};

export default FriendsList;
