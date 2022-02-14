import React from 'react'
import { Redirect } from 'react-router-dom'
import { PATH_LOGIN, PATH_LOGO } from '../constants/routes'
import { isLoggedIn } from '../utils/session'
import { Layout, Spin } from 'antd'
import NavigationBar from './NavigationBar'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'

const { Content, Footer } = Layout

interface ProtectedRoutesProps {
  protect?: boolean
  children: React.ReactNode
  allowSearch?: boolean
  spinning?: boolean
}

const RoutesWrapper: React.FC<ProtectedRoutesProps> = ({
  protect = false,
  allowSearch = true,
  spinning = false,
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
    <Layout>
      <Spin spinning={spinning} size={'large'}>
        <NavigationBar allowSearch={allowSearch} />
        <Content
          style={{
            overflow: 'initial',
            maxWidth: '85%',
            margin: 'auto',
          }}
        >
          <div className="">{props.children}</div>
          <Footer style={{ textAlign: 'center' }}>
            FAST SHOP ©{`${new Date().getFullYear()}`} Created by KODIGO's
            Students
          </Footer>
        </Content>
      </Spin>
    </Layout>
  )
}

export default RoutesWrapper
