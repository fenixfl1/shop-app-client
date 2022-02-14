import { SaveOutlined } from '@ant-design/icons'
import { Col, Form, FormInstance, Row, Select, Input, Button } from 'antd'
import React from 'react'
import { validateMessages } from '../constants/general'

const { Item: FormItem } = Form

interface AddressFromProps {
  form: FormInstance
  onFinish: () => void
}

const AddressFrom: React.FC<AddressFromProps> = ({
  form,
  onFinish,
}): React.ReactElement => {
  return (
    <Row justify={'center'}>
      <Form form={form} validateMessages={validateMessages} layout={'vertical'}>
        <Row justify={'space-between'}>
          <Col xs={24}>
            <FormItem
              label={'Country'}
              name={'country'}
              rules={[{ required: true }]}
            >
              <Select placeholder={'Select Country'} />
            </FormItem>
          </Col>
          <Col xs={24}>
            <FormItem
              label={'Full name'}
              name={'full_name'}
              rules={[{ required: true }]}
            >
              <Input placeholder={'Full Name'} />
            </FormItem>
          </Col>
          <Col xs={11}>
            <FormItem
              label={'Phone number'}
              name={'number'}
              rules={[{ required: true }]}
            >
              <Input placeholder={'Full Name'} />
            </FormItem>
          </Col>
          <Col xs={11}>
            <FormItem
              label={'Zip code'}
              name={'postal_code'}
              rules={[{ required: true }]}
            >
              <Input placeholder={'Full Name'} />
            </FormItem>
          </Col>
          <Col xs={24}>
            <FormItem
              label={'Line 1'}
              name={'street'}
              rules={[{ required: true }]}
            >
              <Input placeholder={'Line 1'} />
            </FormItem>
          </Col>
          <Col xs={12} />
          <Col>
            <Button
              type={'primary'}
              shape={'round'}
              icon={<SaveOutlined style={{ fontSize: 16 }} />}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  )
}

export default AddressFrom
