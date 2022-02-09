import React from 'react'
import { Redirect } from 'react-router-dom'
import { PATH_LOGIN } from '../constants/routes'
import { isLoggedIn } from '../utils/session'
import { Layout, Spin } from 'antd'
import NavigationBar from './NavigationBar'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'

const { Content, Footer } = Layout

interface ProtectedRoutesProps {
  protect?: boolean
  children: React.ReactNode
}

const RoutesWrapper: React.FC<ProtectedRoutesProps> = ({
  protect = false,
  ...props
}): React.ReactElement => {
  const { fetchingProducts } = useSelector(
    (state: StoreState) => state.products
  )
  if (isLoggedIn() && protect) {
    return (
      <Redirect
        to={`${PATH_LOGIN}?next=${window.location.pathname.replace('/', '')}`}
      />
    )
  }

  return (
    <Layout className="layout">
      <Layout>
        <Content>
          <NavigationBar />
        </Content>
      </Layout>
      <Spin spinning={fetchingProducts} size={'large'}>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{props.children}</div>
        </Content>
      </Spin>
      <Footer style={{ textAlign: 'center' }}>
        FAST SHOP ©{`${new Date().getFullYear()}`} Created by KODIGO's Students
      </Footer>
    </Layout>
  )
}

export default RoutesWrapper
