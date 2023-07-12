import React, { FC } from 'react';
import Friend from './Friend';
import { IFriend } from '../App';

interface IFriendsProps {
  friends: IFriend[];
}

const FriendsList: FC<IFriendsProps> = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
