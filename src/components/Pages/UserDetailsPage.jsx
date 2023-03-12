import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, deleteUser } from 'redux/users/usersOperations';
import { selectCurrent } from 'redux/users/usersSelectors';

export const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);
  const user = useSelector(selectCurrent);

  const onDeleteUser = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };
  return (
    <>
      {user && (
        <div>
          <img src={user.avatar} alt="" />
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <button type="button" onClick={() => onDeleteUser(id)}>Delete</button>
        </div>
      )}
    </>
  );
};
