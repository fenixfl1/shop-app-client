import {
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Col, Menu, Row, Input, Select, Tooltip } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import { Redirect } from 'react-router-dom'

const { Group } = Input
const { Option } = Select
const { Item } = Menu

const NavigationBar: React.FC = (): React.ReactElement => {
  const redirectTo = (route: string) => {
    return <Redirect to={route} />
  }

  return (
    <Row justify={'space-between'} align={'middle'}>
      <Col xs={8}>
        <span
          style={{
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: '14px',
            fontStyle: 'italic',
            letterSpacing: '10px',
          }}
        >
          SHOP APP
        </span>
      </Col>
      <Col xs={8}>
        <Row align={'middle'}>
          <Group compact>
            <Select defaultValue={1} style={{ width: '20%' }}>
              <Option key={1} value={1}>
                All
              </Option>
              <Option key={2} value={2}>
                Electronic
              </Option>
            </Select>
            <Search placeholder={'Search'} style={{ width: '75%' }} />
          </Group>
        </Row>
      </Col>
      <Col xs={8}>
        <Menu
          selectable={false}
          theme={'dark'}
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ maxHeight: '64px' }}
        >
          <Row justify={'end'} style={{ width: '100%' }}>
            <Tooltip title={'Signup'}>
              <Item
                onClick={() => redirectTo('/signup')}
                icon={<UserAddOutlined />}
                key={1}
              >
                Signup
              </Item>
            </Tooltip>
            <Tooltip title={'Login'}>
              <Item
                onClick={() => redirectTo('/login')}
                icon={<UserOutlined />}
                key={2}
              >
                Login
              </Item>
            </Tooltip>
            <Tooltip title={'Shopping Cart'}>
              <Item
                onClick={() => redirectTo('/shopping_cart')}
                key={3}
                icon={
                  <ShoppingCartOutlined
                    style={{ fontSize: '2rem', paddingTop: '18px' }}
                  />
                }
              />
            </Tooltip>
          </Row>
        </Menu>
      </Col>
    </Row>
  )
}

export default NavigationBar
