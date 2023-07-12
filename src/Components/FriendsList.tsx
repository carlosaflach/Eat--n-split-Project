import React, { FC } from 'react';
import Friend from './Friend';
import { IFriends } from '../App';

interface IFriendsProps {
  initialFriends: IFriends[];
}

const FriendsList: FC<IFriendsProps> = ({ initialFriends }) => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
