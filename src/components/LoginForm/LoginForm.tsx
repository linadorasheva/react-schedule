import { Button, Form, Input } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { authActionCreators } from '../../store/ActionCreators';
import { formRules } from '../../utils/formRules';

const LoginForm = () => {
  const { isAuth, error, isLoading } = useTypedSelector(
    (state) => state.authReducer
  );

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const submit = () => {
    dispatch(authActionCreators.loginUser(userName, userPassword));
  };

  useEffect(() => {
    if (isAuth && localStorage.getItem('auth')) {
      navigate('/events', { replace: true });
    }
  }, [isAuth]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submit}
      autoComplete="off"
    >
      {error && <p style={{ color: 'red', marginLeft: '20px' }}>{error}</p>}
      <Form.Item
        label="Username"
        name="username"
        rules={[formRules.required('Please input your username!')]}
      >
        <Input
          value={userName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[formRules.required('Please input your password!')]}
      >
        <Input.Password
          value={userPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserPassword(e.target.value)
          }
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
