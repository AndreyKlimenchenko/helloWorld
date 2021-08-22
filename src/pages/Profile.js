import React, {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, InfoTitle, InfoText, Info } from '../styled/Random';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
    };
    getToken();
  }, []);

  return (
    isAuthenticated && (
      <div>
        <Avatar src={user.picture} alt={user.name} />
        <Info><InfoTitle>Username: </InfoTitle><InfoText>{user.name}</InfoText></Info>
        <Info><InfoTitle>Email: </InfoTitle><InfoText>{user.email}</InfoText></Info>
      </div>
    )
  );
};

export default Profile;