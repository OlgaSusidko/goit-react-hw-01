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
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
