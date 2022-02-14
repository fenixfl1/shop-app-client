import { CreditCardFilled } from '@ant-design/icons'
import { Avatar, Col, Form, List, Modal, Row, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../actions/user'
import { AddressFrom, PaymentForm, RoutesWrapper } from '../components'
import { StoreState } from '../reducers'
import { getSessionInfo } from '../utils/session'

const Account = (): React.ReactElement => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [modalStateFormPayment, setModalStateFormPayment] = useState<boolean>()
  const [modalStateFormAddress, setModalStateFormAddress] = useState<boolean>()
  const { user, fetchingUserData } = useSelector(
    (state: StoreState) => state.user
  )

  useEffect(() => {
    dispatch(getUserInfo(getSessionInfo().id))
  }, [])

  const handleModalPayment = () => {
    setModalStateFormPayment(!modalStateFormPayment)
  }

  const handleModalAddress = () => {
    setModalStateFormAddress(!modalStateFormAddress)
  }

  const userData = [
    {
      title: 'Name: ',
      desc: `${user.name} ${user.lastname}`.toUpperCase(),
    },
    {
      title: 'Username: ',
      desc: user.username?.toLowerCase(),
    },
    {
      title: 'Email',
      desc: user.email?.toLowerCase(),
    },
    {
      title: 'Password',
      desc: '*************',
    },
  ]

  return (
    <RoutesWrapper allowSearch={false} spinning={fetchingUserData} protect>
      <Row style={{ marginTop: '25px' }} justify={'space-between'}>
        <Col xs={11}>
          <List
            header={
              <Row>
                <h3>Basic user info</h3>
              </Row>
            }
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={userData}
            bordered
            renderItem={(item) => (
              <List.Item actions={[<a key="list-loadmore-edit">edit</a>]}>
                <Skeleton avatar title={false} loading={null} active>
                  <List.Item.Meta title={item.title} description={item.desc} />
                </Skeleton>
              </List.Item>
            )}
          />
        </Col>

        <Col xs={11}>
          <List
            header={
              <Row>
                <h3>Payment methods</h3>
              </Row>
            }
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={[user]}
            bordered
            renderItem={(item) => (
              <List.Item actions={[<a key="list-loadmore-edit">edit</a>]}>
                <Skeleton avatar title={false} loading={null} active>
                  <List.Item.Meta
                    avatar={<CreditCardFilled style={{ fontSize: 22 }} />}
                    title={item.name}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <div>Username: {item.username}</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Modal
        footer={null}
        onCancel={handleModalPayment}
        visible={modalStateFormPayment}
      >
        <PaymentForm form={form} onFinish={null} />
      </Modal>

      <Modal
        footer={null}
        onCancel={handleModalAddress}
        visible={modalStateFormAddress}
      >
        <AddressFrom form={form} onFinish={null} />
      </Modal>
    </RoutesWrapper>
  )
}

export default Account
