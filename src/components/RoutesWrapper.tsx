import React from 'react'
import { Redirect } from 'react-router-dom'
import { PATH_LOGIN } from '../constants/routes'
import { isLoggedIn } from '../utils/session'
import { Layout } from 'antd'
import NavigationBar from './NavigationBar'

const { Content, Footer } = Layout

interface ProtectedRoutesProps {
  protect?: boolean
  children: React.ReactNode
}

const RoutesWrapper: React.FC<ProtectedRoutesProps> = ({
  protect = false,
  ...props
}): React.ReactElement => {
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
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Shop App ©{`${new Date().getFullYear()}`} Created by KODIGO's Students
      </Footer>
    </Layout>
  )
}

export default RoutesWrapper
