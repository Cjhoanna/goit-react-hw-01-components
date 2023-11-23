import { FriendsList, ListPeople, ListStatus } from './FriendList.styles';

const FriendList = ({ friends }) => {
  return (
    <FriendsList class="friend-list">
      {friends.map(friend => (
        <ListPeople key={friend.id} class="item">
          <ListStatus
            style={{
              backgroundColor: friend.isOnline === true ? '#4eae51' : '#fd5351',
            }}
            class="status"
          ></ListStatus>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
            height="48"
          />
          <p class="name" style={{ fontSize: '30px' }}>
            {friend.name}
          </p>
        </ListPeople>
      ))}
    </FriendsList>
  );
};

export default FriendList;
