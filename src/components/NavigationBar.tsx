import {
  LogoutOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Col,
  Menu,
  Row,
  Input,
  Select,
  Tooltip,
  Button,
  Avatar,
  Dropdown,
  Badge,
} from 'antd'
import Search from 'antd/lib/input/Search'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { isLoggedIn } from '../utils/session'
import {
  PATH_LOGIN,
  PATH_REGISTER_USER,
  PATH_SHOPPING_CART,
} from '../constants/routes'

const { Group } = Input
const { Option } = Select
const { Item } = Menu

const CustomButton = styled(Button)`
  margin: 0 10px;
  max-height: 64px;
  color: white;
  font-size: 2rem;
  :hover {
    transition: all 1s;
    background: rgba(255, 255, 255, 0.09);
    cursor: pointer;
  }
`

const LogoContainer = styled.span`
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 10px;
`

type MenuType = {
  desc: string
  icon: React.ReactNode
  key: string
  path: string
}

const menuSignedUSers: MenuType[] = [
  {
    key: '1',
    desc: 'Account',
    icon: <UserOutlined />,
    path: '/account',
  },
  {
    key: '2',
    desc: 'Shopping Cart',
    icon: <ShoppingCartOutlined />,
    path: '/shopping_cart',
  },
  {
    key: '3',
    desc: 'Logout',
    icon: <LogoutOutlined />,
    path: '/logout',
  },
]
const menuAnonymousUSers: MenuType[] = [
  {
    key: '1',
    desc: 'Login',
    icon: <UserOutlined />,
    path: '/login',
  },
  {
    key: '1',
    desc: 'Create Account',
    icon: <UserAddOutlined />,
    path: '/signup',
  },
  {
    key: '2',
    desc: 'Shopping Cart',
    icon: <ShoppingCartOutlined />,
    path: '/shopping_cart',
  },
]

const NavigationBar: React.FC = (): React.ReactElement => {
  const [dropdownMenu, setDropdownMenu] = useState<MenuType[]>()

  const history = useHistory()

  useEffect(() => {
    if (isLoggedIn()) {
      setDropdownMenu(menuSignedUSers)
    } else setDropdownMenu(menuAnonymousUSers)
  }, [isLoggedIn])

  const menu = (
    <Menu>
      {dropdownMenu?.map((item, index) => (
        <Item
          key={index}
          icon={item.icon}
          onClick={() => history.push(item.path)}
        >
          {item.desc}
        </Item>
      ))}
    </Menu>
  )

  return (
    <Header>
      <Row
        justify={'space-between'}
        align={'middle'}
        style={{ maxHeight: '64px' }}
      >
        <Col xs={12} md={8}>
          <LogoContainer>SHOP APP</LogoContainer>
        </Col>
        <Col xs={0} md={8}>
          <Row align={'middle'}>
            <Group compact>
              <Select defaultValue={1}>
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
        <Col xs={12} md={8} style={{ maxHeight: '64px' }}>
          <Row justify={'end'} align={'top'}>
            <Col xs={0} md={2}>
              <Tooltip title={'Shopping cart'}>
                <Badge count={5} offset={[-48, 30]}>
                  <CustomButton
                    className={'button-menu'}
                    icon={<ShoppingCartOutlined />}
                    onClick={() => <Redirect to={PATH_SHOPPING_CART} />}
                    shape={'circle'}
                    size={'large'}
                    type={'link'}
                  />
                </Badge>
              </Tooltip>
            </Col>
            <Col xs={0} md={2}>
              <Tooltip title={'Account'}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <CustomButton
                    className={'button-menu'}
                    icon={<UserOutlined />}
                    onClick={() => <Redirect to={PATH_REGISTER_USER} />}
                    shape={'circle'}
                    size={'large'}
                    type={'link'}
                  />
                </Dropdown>
              </Tooltip>
            </Col>
            <Col xs={4} md={0}>
              <Dropdown overlay={menu} trigger={['click']}>
                <CustomButton
                  shape={'circle'}
                  size={'large'}
                  type={'link'}
                  icon={<MenuUnfoldOutlined />}
                />
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default NavigationBar
