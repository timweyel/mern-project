import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Halsey',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
