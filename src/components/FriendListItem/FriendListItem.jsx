import c from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={c.item}>
      <img src={avatar} alt="Avatar" width="48" className={c.img} />
      <p>{name}</p>
      <p className={isOnline ? c.green : c.red}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
