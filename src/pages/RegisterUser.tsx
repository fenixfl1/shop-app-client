import { Row, Col, Card, Form, Input, Button, Image, message } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutesWrapper } from '../components'
import { validateMessages } from '../constants/general'
import { PATH_LOGIN, PATH_LOGO_WITHOUT_TEXT_BLACK } from '../constants/routes'
import { formItemLayout } from '../themes'
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
      data.status = true

      dispatch(createUser(data))
    } catch (error) {
      message.success({
        content: 'Something is wrong in the form',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      })
    }
  }

  return (
    <RoutesWrapper allowSearch={false}>
      <Row
        justify={'center'}
        className={'login-card-container'}
        align={'middle'}
      >
        <Col xs={24} md={10} xxl={6}>
          <Card style={{ borderRadius: '8px' }}>
            <Form
              {...formItemLayout}
              autoComplete={'off'}
              form={form}
              name="nest-messages"
              validateMessages={validateMessages}
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

              <FormItem name={'name'} rules={[{ required: true }]}>
                <Input placeholder={'Name'} />
              </FormItem>

              <FormItem name={'last_name'} rules={[{ required: true }]}>
                <Input placeholder={'Last Name'} />
              </FormItem>
              <FormItem name={'username'} rules={[{ required: true }]}>
                <Input placeholder={'Last Name'} />
              </FormItem>

              <FormItem
                name={'email'}
                rules={[{ type: 'email', required: true }]}
              >
                <Input placeholder={'user@example.com'} />
              </FormItem>
              <FormItem name={'password'} rules={[{ required: true }]}>
                <Input.Password autoComplete={'off'} placeholder={'Password'} />
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
