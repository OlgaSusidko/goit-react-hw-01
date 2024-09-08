import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline ? <p>Online</p> : <p>Offline</p>}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
