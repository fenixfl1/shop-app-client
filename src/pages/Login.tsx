import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import RoutesWrapper from '../components/RoutesWrapper'
import { PATH_REGISTER_USER, PATH_MAIN } from '../constants/routes'

const { Item: FormItem } = Form

const CardTitle = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 10px;
  text-decoration: underline;
  padding: 20px 0;
`

const Login = (): React.ReactElement => {
  const history = useHistory()

  const onFinish = () => {
    const next = `/${
      window.location.search.substring(1).split('=')[1] || PATH_MAIN
    }`
    history.push(next)
  }

  return (
    <RoutesWrapper>
      <Row
        justify={'center'}
        className={'login-card-container'}
        align={'middle'}
      >
        <Col xs={7} lg={5}>
          <Card style={{ borderRadius: '8px' }}>
            <Form
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <FormItem>
                <Row justify={'center'}>
                  <CardTitle>SHOP APP</CardTitle>
                </Row>
              </FormItem>
              <FormItem
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
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
