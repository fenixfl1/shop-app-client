import {
  HomeOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Badge,
  Button,
  Col,
  Dropdown,
  Image,
  Input,
  Menu,
  Row,
  Select,
  Tooltip,
} from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { isLoggedIn } from '../utils/session'
import {
  PATH_REGISTER_USER,
  PATH_SHOPPING_CART,
  PATH_MAIN,
} from '../constants/routes'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'

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
  cursor: pointer;
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

interface NavigationBarProps {
  allowSearch: boolean
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  allowSearch,
}): React.ReactElement => {
  const [dropdownMenu, setDropdownMenu] = useState<MenuType[]>()
  const { shoppingCartCounter } = useSelector(
    (state: StoreState) => state.products
  )

  const history = useHistory()

  useEffect(() => {
    if (isLoggedIn()) {
      setDropdownMenu(menuSignedUSers)
    } else setDropdownMenu(menuAnonymousUSers)
  }, [])

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
    <Header
      style={{
        backgroundColor: '#364d79',
        height: '80px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <Row
        justify={'space-between'}
        align={'middle'}
        style={{ height: '80px' }}
      >
        <Col xs={8}>
          <img width={50} src={'/logo.png'} />
        </Col>
        <Col xs={0} md={8} />
        {!allowSearch && (
          <Col xs={0} md={8}>
            <Row align={'middle'} justify={'start'}>
              <Input
                // bordered={false}
                placeholder={'Search'}
                size={'large'}
                style={{ borderRadius: '20px' }}
              />
            </Row>
          </Col>
        )}
        <Col xs={12} md={8} style={{ maxHeight: '64px' }}>
          <Row justify={'end'} align={'top'}>
            <Col xs={0} md={2}>
              <Tooltip title={'Home'}>
                <Link to={PATH_MAIN}>
                  <CustomButton
                    className={'button-menu'}
                    icon={<HomeOutlined style={{ fontSize: '18px' }} />}
                    onClick={() => <Redirect to={PATH_MAIN} />}
                    shape={'circle'}
                    size={'large'}
                    type={'link'}
                  />
                </Link>
              </Tooltip>
            </Col>
            <Col xs={0} md={2}>
              <Tooltip title={'Shopping cart'}>
                <Link to={PATH_SHOPPING_CART}>
                  <Badge count={shoppingCartCounter} offset={[-48, 30]}>
                    <CustomButton
                      className={'button-menu'}
                      icon={
                        <ShoppingCartOutlined style={{ fontSize: '18px' }} />
                      }
                      onClick={() => <Redirect to={PATH_SHOPPING_CART} />}
                      shape={'circle'}
                      size={'large'}
                      type={'link'}
                    />
                  </Badge>
                </Link>
              </Tooltip>
            </Col>
            <Col xs={0} md={2}>
              <Tooltip title={'Account'}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <CustomButton
                    className={'button-menu'}
                    icon={<UserOutlined style={{ fontSize: '18px' }} />}
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
