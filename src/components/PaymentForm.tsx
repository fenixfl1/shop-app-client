import { CreditCardTwoTone, DollarCircleFilled } from '@ant-design/icons'
import { Row, Form, Col, Input, Button } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import { validateMessages } from '../constants/general'

const { Item: FormItem } = Form

const PaymentForm: React.FC = (): React.ReactElement => {
  const [form] = useForm()

  return (
    <Row justify={'center'}>
      <Form layout={'vertical'} form={form} validateMessages={validateMessages}>
        <Row justify={'space-between'}>
          <Col xs={24} style={{ margin: '15px 0px' }}>
            <h3>Add Payment Method</h3>
          </Col>
          <Col xs={24}>
            <FormItem label={'Name on Card'} name={'name_on_card'}>
              <Input placeholder={'Name on Card'} />
            </FormItem>
          </Col>
          <Col xs={24}>
            <FormItem label={'Card Number'} name={'1234 1234 1234 1234'}>
              <Input
                placeholder={'Card number'}
                suffix={<CreditCardTwoTone />}
              />
            </FormItem>
          </Col>
          <Col xs={11}>
            <FormItem label={'Expiry'} name={'expiration'}>
              <Input placeholder={'MM / YY'} />
            </FormItem>
          </Col>
          <Col xs={11}>
            <FormItem label={'CVC'} name={'code'}>
              <Input placeholder={'CVC'} />
            </FormItem>
          </Col>
          <Col xs={11} />
          <Col>
            <FormItem>
              <Button
                shape={'round'}
                type={'primary'}
                icon={<DollarCircleFilled style={{ fontSize: 16 }} />}
              >
                Save
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Row>
  )
}

export default PaymentForm
