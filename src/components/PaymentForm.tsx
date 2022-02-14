import { DollarCircleFilled } from '@ant-design/icons'
import { Row, Form, Col, Input, Button, DatePicker, FormInstance } from 'antd'
import React from 'react'
import { validateMessages } from '../constants/general'

const { Item: FormItem } = Form

interface PaymentFormProps {
  form: FormInstance
  onFinish: () => void
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  form,
  onFinish,
}): React.ReactElement => {
  return (
    <Row justify={'center'}>
      <Form layout={'vertical'} form={form} validateMessages={validateMessages}>
        <Row justify={'space-between'}>
          <Col xs={24} style={{ margin: '15px 0px' }}>
            <h3>Add Payment Method</h3>
          </Col>
          <Col xs={24}>
            <FormItem
              label={'Name on Card'}
              name={'name_on_card'}
              rules={[{ required: true }]}
              normalize={(value: string) =>
                RegExp('^[a-z A-Z ZÀ-ÿ]+$').test(value)
                  ? value
                  : value.substring(0, value.length - 1)
              }
            >
              <Input placeholder={'Name on Card'} />
            </FormItem>
          </Col>
          <Col xs={24}>
            <FormItem
              label={'Card Number'}
              name={'account_number'}
              rules={[{ required: true }]}
              normalize={(value: string) =>
                value.match(new RegExp('^[0-9 -,]+$'))
                  ? value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
                  : value.substring(0, value.length - 1)
              }
            >
              <Input maxLength={19} placeholder={'Card number'} />
            </FormItem>
          </Col>
          <Col xs={11}>
            <FormItem
              label={'Expiry'}
              name={'expiration'}
              rules={[{ required: true }]}
            >
              <DatePicker
                placeholder={'MM / YY'}
                format={'MM/YY'}
                suffixIcon={null}
                showToday={false}
                style={{ width: '100%' }}
              />
            </FormItem>
          </Col>
          <Col xs={11}>
            <FormItem
              label={'CVC'}
              name={'code'}
              rules={[{ required: true }]}
              normalize={(value: string) =>
                value.match(new RegExp('^[0-9 -,]+$'))
                  ? value
                  : value.substring(0, value.length - 1)
              }
            >
              <Input min={3} maxLength={3} placeholder={'CVC'} />
            </FormItem>
          </Col>
          <Col xs={11} />
          <Col>
            <FormItem>
              <Button
                icon={<DollarCircleFilled style={{ fontSize: 16 }} />}
                onClick={onFinish}
                shape={'round'}
                type={'primary'}
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
