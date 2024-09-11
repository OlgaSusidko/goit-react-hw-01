import FriendListItem from "../FriendListItem/FriendListItem";
import c from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={c.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={
              friend.isOnline ? (
                <p className={c.green}>Online</p>
              ) : (
                <p className={c.red}>Offline</p>
              )
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
