import c from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={c.item}>
      <img src={avatar} alt="Avatar" width="48" className={c.img} />
      <p>{name}</p>
      <p>{status}</p>
    </div>
  );
};

export default FriendListItem;
