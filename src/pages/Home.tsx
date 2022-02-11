import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, addToShoppingCart } from '../actions/products'
import { ProductCard, RoutesWrapper } from '../components'
import { StoreState } from '../reducers'
import {
  Avatar,
  Card,
  Row,
  Image,
  Tooltip,
  InputNumber,
  Form,
  Skeleton,
  Col,
  List,
  Space,
  Divider,
  Carousel,
  Button,
  Modal,
  Menu,
} from 'antd'
import {
  LikeOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form'
import Sider from 'antd/lib/layout/Sider'
import styled from 'styled-components'
import { ProductsType } from '../reducers/products'
import { Link } from 'react-router-dom'

const Home = (): React.ReactElement => {
  const dispatch = useDispatch()

  const [selectedProduct, setSelectedProduct] = useState<ProductsType>()
  const [modalVisibilityState, setModalVisibilityState] = useState<boolean>()
  const { products, fetchingProducts } = useSelector(
    (state: StoreState) => state.products
  )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleModalState = () => {
    setModalVisibilityState(!modalVisibilityState)
  }

  return (
    <>
      <RoutesWrapper>
        <Row justify={'space-between'}>
          <Col xs={24} style={{ marginTop: '25px' }}>
            <Row justify={'center'}>
              <Menu
                defaultSelectedKeys={['1']}
                mode={'horizontal'}
                style={{ background: 'transparent', width: '85%' }}
              >
                {new Array(10).fill(null).map((_, index) => (
                  <Menu.Item key={index}>Category {index}</Menu.Item>
                ))}
              </Menu>
            </Row>
          </Col>
          <Col xs={24}>
            <Carousel autoplay>
              {new Array(5).fill(null).map((_, index) => (
                <div key={index}>
                  <h3
                    style={{
                      height: '200px',
                      color: '#fff',
                      lineHeight: '200px',
                      textAlign: 'center',
                      background: '#364d79',
                    }}
                  >
                    {index + 1}
                  </h3>
                </div>
              ))}
            </Carousel>
          </Col>

          <Col xs={24}>
            <Skeleton loading={fetchingProducts} active>
              <Row justify={'space-between'}>
                {products.map((item) => (
                  <ProductCard product={item} />
                ))}
              </Row>
            </Skeleton>
          </Col>
        </Row>
      </RoutesWrapper>

      <Modal
        visible={modalVisibilityState}
        onOk={handleModalState}
        onCancel={handleModalState}
      >
        {selectedProduct?.name}
      </Modal>
    </>
  )
}

export default Home
