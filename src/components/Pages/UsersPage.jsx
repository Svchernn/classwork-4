import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectUsers } from 'redux/users/usersSelectors';
import { getUsers } from 'redux/users/usersOperations';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="add">Add user</Link>
    </>
  );
};
