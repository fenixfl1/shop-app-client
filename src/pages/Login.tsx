import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Col, Form, Image, Input, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import RoutesWrapper from '../components/RoutesWrapper'
import { authenticateUser } from '../actions/user'
import {
  PATH_REGISTER_USER,
  PATH_MAIN,
  PATH_LOGO_WITHOUT_TEXT_BLACK,
} from '../constants/routes'
import { isLoggedIn } from '../utils/session'
import { StoreState } from '../reducers'

const { Item: FormItem } = Form

export const CardTitle = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 10px;
  text-decoration: underline;
  padding: 20px 0;
`

const Login = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { isLoggedIn: inSession } = useSelector(
    (state: StoreState) => state.user
  )

  useEffect(() => {
    inSession && window.location.reload()
  }, [inSession])

  if (isLoggedIn()) {
    return <Redirect to={PATH_MAIN} />
  }

  return (
    <RoutesWrapper allowSearch={false}>
      <Row
        justify={'center'}
        className={'login-card-container'}
        align={'middle'}
      >
        <Col xs={24} sm={8} xxl={6} style={{ margin: '20px 0px' }}>
          <Card style={{ borderRadius: '8px' }}>
            <Form
              autoComplete={'off'}
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={({ username, password }) => {
                dispatch(authenticateUser(username, password))
              }}
            >
              <FormItem>
                <Row justify={'center'}>
                  <Image
                    preview={false}
                    width={'5rem'}
                    src={PATH_LOGO_WITHOUT_TEXT_BLACK}
                    alt={'Logo'}
                  />
                </Row>
              </FormItem>
              <FormItem
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
                  autoComplete={'off'}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </FormItem>
              <FormItem
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </FormItem>
              <FormItem name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </FormItem>

              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  Log in
                </Button>
              </FormItem>

              <FormItem>
                <Row justify={'center'}>
                  <Link to={'/reset'}>Did you forget your password?</Link>
                </Row>
              </FormItem>
            </Form>
          </Card>

          <Card style={{ marginTop: '20px', borderRadius: '8px' }}>
            <Row justify={'center'}>
              <span>
                You do not have an account?{' '}
                <Link to={PATH_REGISTER_USER}>Sign up!</Link>
              </span>
            </Row>
          </Card>
        </Col>
      </Row>
    </RoutesWrapper>
  )
}

export default Login
