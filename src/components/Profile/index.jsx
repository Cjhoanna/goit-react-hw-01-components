import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileText,
} from './Profile.styles';

const Profile = ({ username, tag, stats, location, avatar }) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage src={avatar} />
        <ProfileText>{username}</ProfileText>
        <ProfileText class="tag">{tag}</ProfileText>
        <ProfileText class="location">{location}</ProfileText>
      </ProfileDescription>
    </ProfileContainer>
  );
};

export default Profile;
