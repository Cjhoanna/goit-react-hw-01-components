import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileText,
  Footer,
  Item,
  Text,
} from './Profile.styles';

const Profile = ({ username, tag, stats, location, avatar }) => {
  const propertyNames = Object.keys(stats);
  return (
    <ProfileContainer className="profile">
      <ProfileDescription className="card">
        <ProfileImage src={avatar} />
        <ProfileText>{username}</ProfileText>
        <ProfileText class="tag">{tag}</ProfileText>
        <ProfileText class="location">{location}</ProfileText>
      </ProfileDescription>
      <Footer className="stats">
        {propertyNames.map(propertyName => (
          <Item key={propertyName}>
            <Text style={{ color: '#8f9ba8' }}>{propertyName}</Text>
            <Text>{stats[propertyName]}</Text>
          </Item>
        ))}
      </Footer>
    </ProfileContainer>
  );
};

export default Profile;
