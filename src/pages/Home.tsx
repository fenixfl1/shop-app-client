import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProductCategory,
  getProducts,
  setModalStateForProductDetail,
  setProductDetails,
} from '../actions/products'
import { ProductCard, RoutesWrapper } from '../components'
import { StoreState } from '../reducers'
import { Row, Skeleton, Col, Carousel, Modal, Menu, Button, Space } from 'antd'
import { ProductsType } from '../reducers/products'
import { Link } from 'react-router-dom'
import { DollarTwoTone, ShoppingCartOutlined } from '@ant-design/icons'

const Home = (): React.ReactElement => {
  const dispatch = useDispatch()
  const {
    categories,
    fetchingProducts,
    products,
    modalStateForProductDetail,
    productDetail,
  } = useSelector((state: StoreState) => state.products)

  useEffect(() => {
    dispatch(getProductCategory())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleModalState = () => {
    dispatch(setModalStateForProductDetail(!modalStateForProductDetail))
  }

  const handleSetProductDetail = (product: ProductsType) => {
    dispatch(setProductDetails(product))
  }

  const modalFooter = (
    <Row justify={'end'}>
      <Space>
        <Button
          shape={'round'}
          type={'primary'}
          icon={<DollarTwoTone style={{ fontSize: '16px' }} />}
        >
          Checkout
        </Button>
        <Button
          shape={'round'}
          type={'default'}
          icon={<ShoppingCartOutlined style={{ fontSize: '16px' }} />}
        >
          Add to cart
        </Button>
      </Space>
    </Row>
  )

  return (
    <>
      <RoutesWrapper>
        <Row justify={'space-between'}>
          <Col xs={24} style={{ marginTop: '25px' }}>
            <Row justify={'center'}>
              <Menu
                defaultSelectedKeys={['1']}
                mode={'horizontal'}
                style={{
                  background: 'transparent',
                  width: '55%',
                }}
              >
                {categories.map((item, index) => (
                  <Menu.Item style={{ margin: 'auto' }} key={index}>
                    {item.name}
                  </Menu.Item>
                ))}
              </Menu>
            </Row>
          </Col>
          <Col xs={24}>
            <Carousel autoplay>
              {products
                .filter((item) => item.discount > 0.0)
                ?.map((item, index) => (
                  <div className={'img-carousel-container'}>
                    <img key={index} src={item.image} alt={item.name} />
                    <Link to={`#/detail/${item.name}`}>
                      <h2>{item.name}</h2>
                    </Link>
                    <h3>{`%${item.discount} off for today`}</h3>
                  </div>
                ))}
            </Carousel>
          </Col>

          <Col xs={24}>
            <Skeleton loading={fetchingProducts} active>
              <Row justify={'space-between'}>
                {products
                  .filter((item) => item.status === true)
                  .map((item) => (
                    <ProductCard
                      onSelect={handleSetProductDetail}
                      product={item}
                    />
                  ))}
              </Row>
            </Skeleton>
          </Col>
        </Row>
      </RoutesWrapper>

      <Modal
        visible={modalStateForProductDetail}
        onCancel={handleModalState}
        footer={modalFooter}
        centered
      >
        <Row justify={'center'} style={{ height: '500px' }}>
          <Col xs={24}>
            <img
              src={'/assets/products/samsung-s10-plus.jpg'}
              alt={'samsung-s10-plus'}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={24}>
            <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ width: '100%' }}>{productDetail.name} </h3>
              <span style={{ width: '100%', textAlign: 'start' }}>
                $US {productDetail.price}
              </span>
            </h2>
            <span>{productDetail.description}</span>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default Home
