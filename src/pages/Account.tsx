import { Avatar, Col, List, Modal, Row, Skeleton } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../actions/user'
import { PaymentForm, RoutesWrapper } from '../components'
import { StoreState } from '../reducers'
import { getSessionInfo } from '../utils/session'

const Account = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { user, fetchingUserData } = useSelector(
    (state: StoreState) => state.user
  )

  useEffect(() => {
    dispatch(getUserInfo(getSessionInfo().id))
  }, [])

  return (
    <RoutesWrapper allowSearch={false} spinning={fetchingUserData}>
      <Row style={{ marginTop: '25px' }} justify={'space-between'}>
        <Col xs={11}>
          <List
            header={<Row>Basic user info</Row>}
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={[user]}
            bordered
            renderItem={(item) => (
              <List.Item actions={[<a key="list-loadmore-edit">edit</a>]}>
                <Skeleton avatar title={false} loading={null} active>
                  <List.Item.Meta
                    avatar={<Avatar src={''} />}
                    title={item.name}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <div>Username: {item.username}</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </Col>

        <Col xs={11}>
          <List
            header={<Row>Payment methods</Row>}
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={[user]}
            bordered
            renderItem={(item) => (
              <List.Item actions={[<a key="list-loadmore-edit">edit</a>]}>
                <Skeleton avatar title={false} loading={null} active>
                  <List.Item.Meta
                    avatar={<Avatar src={''} />}
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
      <Modal visible={true} footer={null} width={500}>
        <PaymentForm />
      </Modal>
    </RoutesWrapper>
  )
}

export default Account
