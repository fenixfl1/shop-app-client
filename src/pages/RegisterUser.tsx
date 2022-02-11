import { Row, Col, Card, Form, Input, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutesWrapper } from '../components'
import { validateMessages } from '../constants/general'
import { PATH_LOGIN } from '../constants/routes'
import { formItemLayout } from '../themes'
import { CardTitle } from './Login'
import { useForm } from 'antd/lib/form/Form'
import { useDispatch } from 'react-redux'
import { createUser } from '../actions/user'

const { Item: FormItem } = Form

const RegisterUser = (): React.ReactElement => {
  const dispatch = useDispatch()
  const [form] = useForm()

  const handleOnFinish = async () => {
    try {
      const data = await form.validateFields()

      dispatch(createUser(data))
    } catch (error) {
      //
    }
  }

  return (
    <RoutesWrapper allowSearch={false}>
      <Row
        justify={'center'}
        className={'login-card-container'}
        align={'middle'}
      >
        <Col xs={24} sm={7}>
          <Card style={{ borderRadius: '8px' }}>
            <Form
              {...formItemLayout}
              autoComplete={'off'}
              form={form}
              layout={'vertical'}
              name="nest-messages"
              validateMessages={validateMessages}
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
                rules={[{ required: true }]}
              >
                <Input.Password autoComplete={'off'} placeholder={'Password'} />
              </FormItem>
              <FormItem name={'repeat_password'} label="Repeat Password">
                <Input.Password placeholder={'Password'} />
              </FormItem>
              <FormItem>
                <Row justify={'end'}>
                  <Button
                    type={'primary'}
                    style={{ width: '100%' }}
                    onClick={handleOnFinish}
                  >
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
