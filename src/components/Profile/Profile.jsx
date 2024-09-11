import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img src={image} alt="User avatar" className={s.image} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <br></br>
          <span>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <br></br>
          <span>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <br></br>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
