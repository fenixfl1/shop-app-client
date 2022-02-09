import { UserOutlined, LockOutlined } from '@ant-design/icons'
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Checkbox,
  Button,
  InputNumber,
} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutesWrapper } from '../components'
import { validateMessages } from '../constants/general'
import { PATH_REGISTER_USER, PATH_LOGIN } from '../constants/routes'
import { defaultBreakpoints, formItemLayout } from '../themes'
import { CardTitle } from './Login'

const { Item: FormItem } = Form

const RegisterUser = (): React.ReactElement => {
  return (
    <RoutesWrapper>
      <Row
        justify={'center'}
        className={'login-card-container'}
        align={'middle'}
      >
        <Col xs={24} sm={7}>
          <Card style={{ borderRadius: '8px' }}>
            <Form
              autoComplete={'off'}
              {...formItemLayout}
              name="nest-messages"
              validateMessages={validateMessages}
              layout={'vertical'}
            >
              <FormItem>
                <Row justify={'center'}>
                  <CardTitle>FAST SHOP</CardTitle>
                </Row>
              </FormItem>

              <FormItem
                name={'name'}
                label={'Name'}
                rules={[{ required: true }]}
              >
                <Input placeholder={'Name'} />
              </FormItem>

              <FormItem
                name={'last_name'}
                label={'Last Name'}
                rules={[{ required: true }]}
              >
                <Input placeholder={'Last NAme'} />
              </FormItem>

              <FormItem
                name={'email'}
                label={'Email'}
                rules={[{ type: 'email', required: true }]}
              >
                <Input placeholder={'user@example.com'} />
              </FormItem>
              <FormItem
                name={'password'}
                label="Password"
                rules={[{ type: 'number', min: 0, max: 99 }]}
              >
                <Input.Password autoComplete={'off'} placeholder={'Password'} />
              </FormItem>
              <FormItem name={'repeat_password'} label="Repeat Password">
                <Input.Password placeholder={'Password'} />
              </FormItem>
              <FormItem>
                <Row justify={'end'}>
                  <Button type={'primary'} style={{ width: '100%' }}>
                    Sing up
                  </Button>
                </Row>
              </FormItem>
            </Form>
          </Card>

          <Card style={{ marginTop: '20px', borderRadius: '8px' }}>
            <Row justify={'center'}>
              <span>
                Do you already have an account?{' '}
                <Link to={PATH_LOGIN}>Login!</Link>
              </span>
            </Row>
          </Card>
        </Col>
      </Row>
    </RoutesWrapper>
  )
}

export default RegisterUser
