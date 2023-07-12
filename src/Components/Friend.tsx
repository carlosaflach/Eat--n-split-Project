import { FC } from 'react';

interface IFriendProps {
  friend: any;
}

const Friend: FC<IFriendProps> = ({ friend }) => {
  return <li>{friend.name}</li>;
};
export default Friend;
