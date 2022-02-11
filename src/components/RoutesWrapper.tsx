import React from 'react'
import { Redirect } from 'react-router-dom'
import { PATH_LOGIN } from '../constants/routes'
import { isLoggedIn } from '../utils/session'
import { Layout, Menu, Row, Spin } from 'antd'
import NavigationBar from './NavigationBar'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import Sider from 'antd/lib/layout/Sider'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons'
import { Header } from 'antd/lib/layout/layout'

const { Content, Footer } = Layout

interface ProtectedRoutesProps {
  protect?: boolean
  children: React.ReactNode
  allowSearch?: boolean
}

const RoutesWrapper: React.FC<ProtectedRoutesProps> = ({
  protect = false,
  allowSearch = true,
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
    <Layout>
      <Layout>
        <NavigationBar allowSearch={allowSearch} />
        <Content
          style={{
            // margin: '24px 16px 0',
            overflow: 'initial',
            maxWidth: '85%',
            margin: 'auto',
          }}
        >
          <Spin spinning={fetchingProducts} size={'large'}>
            <div className="">{props.children}</div>
          </Spin>
          <Footer style={{ textAlign: 'center' }}>
            FAST SHOP ©{`${new Date().getFullYear()}`} Created by KODIGO's
            Students
          </Footer>
        </Content>
      </Layout>
    </Layout>
    // <Layout>
    //   <NavigationBar allowSearch={allowSearch} />
    //   <div
    //     className={'container'}
    //     style={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       margin: 'auto',
    //       position: 'relative',
    //     }}
    //   >
    //     <Layout hasSider style={{ width: '1400px' }}>
    //       <Sider
    //         style={{
    //           background: '#f0f2f5',
    //           overflow: 'auto',
    //           height: 'calc(100vh - 80px)',
    //           position: 'fixed',
    //           left: 0,
    //           bottom: 0,
    //           top: 130,
    //         }}
    //       >
    //         <div className="logo" />
    //         <Row style={{ height: 'inherit' }} align={'middle'}>
    //           <Menu
    //             style={{ background: '#f0f2f5' }}
    //             theme="light"
    //             mode="inline"
    //             defaultSelectedKeys={['4']}
    //           >
    //             {new Array(10).fill(null).map((_, index) => (
    //               <Menu.Item
    //                 key={index}
    //                 icon={<UserOutlined style={{ fontSize: 24 }} />}
    //               >
    //                 {`Item ${index}`}
    //               </Menu.Item>
    //             ))}
    //           </Menu>
    //         </Row>
    //       </Sider>
    //       <Layout className="site-layout" style={{ marginLeft: 200 }}>
    //         <Content
    //           style={{
    //             overflow: 'initial',
    //             height: 'inherit',
    //           }}
    //         >
    //           <div
    //             className="site-layout-background"
    //             style={{ padding: 24, textAlign: 'center' }}
    //           >
    //             {props.children}
    //           </div>
    //         </Content>
    //         <Footer style={{ textAlign: 'center' }}>
    //           FAST SHOP ©{`${new Date().getFullYear()}`} Created by KODIGO's
    //           Students
    //         </Footer>
    //       </Layout>
    //     </Layout>
    //   </div>
    // </Layout>
  )
}

export default RoutesWrapper
