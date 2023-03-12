import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/usersOperations';

export const AddUserPage = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      avatar,
      name,
      number,
      email,
      address,
    };
    dispatch(addUser(newUser));
    navigate('/users');
  };

  const onChangeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'avatar':
        setAvatar(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        avatar
        <input
          onChange={onChangeInput}
          name="avatar"
          value={avatar}
          type="url"
        />
      </label>
      <label>
        name
        <input onChange={onChangeInput} name="name" value={name} type="text" />
      </label>
      <label>
        phone
        <input
          onChange={onChangeInput}
          name="phone"
          value={number}
          type="number"
        />
      </label>
      <label>
        email
        <input
          onChange={onChangeInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        address
        <input
          onChange={onChangeInput}
          name="address"
          value={address}
          type="text"
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
