import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToShoppingCart,
  getProductCategory,
  getProducts,
  setModalStateForProductDetail,
  setProductDetails,
} from '../actions/products'
import { ProductCard, RoutesWrapper } from '../components'
import { StoreState } from '../reducers'
import {
  Button,
  Carousel,
  Col,
  Image,
  Menu,
  Modal,
  notification,
  Row,
  Skeleton,
  Space,
} from 'antd'
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

  useEffect(() => {
    !modalStateForProductDetail && dispatch(setProductDetails({}))
  }, [modalStateForProductDetail])

  const handleModalState = () => {
    dispatch(setModalStateForProductDetail(!modalStateForProductDetail))
  }

  const handleSetProductDetail = (product: ProductsType) => {
    dispatch(setProductDetails(product))
  }

  const handleAddToCart = () => {
    handleModalState()
    dispatch(
      addToShoppingCart({
        ...productDetail,
        count: 1,
      })
    )
    notification.success({
      icon: (
        <ShoppingCartOutlined style={{ fontSize: '16px', color: '#52c41a' }} />
      ),
      message: 'Success',
      description: 'Product added successfully',
    })
  }

  const modalFooter = (
    <Row justify={'end'}>
      <Space>
        <Button
          icon={<ShoppingCartOutlined style={{ fontSize: '16px' }} />}
          onClick={handleAddToCart}
          shape={'round'}
          type={'default'}
        >
          Add to cart
        </Button>
        <Button
          icon={<DollarTwoTone style={{ fontSize: '16px' }} />}
          onClick={handleAddToCart}
          shape={'round'}
          type={'primary'}
        >
          Checkout
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
                    <Link
                      to={`#/detail/${item.name}`}
                      onClick={() => {
                        handleSetProductDetail(item)
                        handleModalState()
                      }}
                    >
                      <h2>{item.name}</h2>
                    </Link>
                    <span>{`%${item.discount} off`}</span>
                  </div>
                ))}
            </Carousel>
          </Col>

          <Col xs={24}>
            <Skeleton loading={fetchingProducts} active>
              <Row justify={'space-between'}>
                {products
                  .filter((item) => item.status === true && item.discount < 1.0)
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
        centered
        footer={modalFooter}
        onCancel={handleModalState}
        visible={modalStateForProductDetail}
      >
        <Row justify={'center'} style={{ height: '500px' }}>
          <Col xs={24}>
            <Image
              alt={productDetail.name}
              src={productDetail.image}
              width={'100%'}
            />
          </Col>
          <Col xs={24}>
            <Row justify={'start'}>
              <h2 style={{ width: '100%' }}>{productDetail.name}</h2>
              <span style={{ width: '100%', textAlign: 'start' }}>
                <strong>
                  USD $
                  {String(productDetail.price).replace(
                    /\B(?=(\d{3})+(?!\d)\.?)/g,
                    ','
                  )}
                </strong>
              </span>
              <span style={{ fontSize: 14 }}>{productDetail.description}</span>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default Home
