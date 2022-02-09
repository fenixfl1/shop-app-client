import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, addToShoppingCart } from '../actions/products'
import { RoutesWrapper } from '../components'
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

const { Meta } = Card

type CounterType = {
  count: React.Key
  key: React.Key
}

const Home = (): React.ReactElement => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const [counter, setCounter] = useState<CounterType>()
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

  const handleAddToCart = (product: ProductsType) => {
    dispatch(
      addToShoppingCart({
        ...product,
        count: counter?.key === product.id ? Number(counter.count) : 1,
      })
    )
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <>
      <RoutesWrapper>
        <Row justify={'space-between'}>
          <Col xs={24}>
            <Carousel autoplay style={{ marginTop: '25px' }}>
              {new Array(5).fill(null).map((_, index) => (
                <div key={index}>
                  <h3
                    style={{
                      height: '160px',
                      color: '#fff',
                      lineHeight: '160px',
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
          <Col xs={24} md={18}>
            <Skeleton loading={fetchingProducts} active>
              <Row justify={'space-between'}>
                {products.map((item, index) => (
                  <Card
                    hoverable
                    style={{
                      marginTop: '55px',
                      width: 300,
                      minHeight: 350,
                      maxHeight: 350,
                    }}
                    key={item.id}
                    cover={
                      <Image
                        preview={false}
                        width={300}
                        src={`https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?pid=ImgDet&rs=${index}`}
                      />
                    }
                    actions={[
                      <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                      />,
                      <Form form={form}>
                        <Form.Item initialValue={1} noStyle>
                          <InputNumber
                            defaultValue={1}
                            className={'input-number-text-center'}
                            bordered={false}
                            size={'small'}
                            onChange={(e) =>
                              setCounter({ count: e, key: item.id })
                            }
                          />
                        </Form.Item>
                      </Form>,
                      <Tooltip title={'Add to shopping cart'}>
                        <div onClick={() => handleAddToCart(item)}>
                          <IconText
                            icon={ShoppingCartOutlined}
                            key="list-vertical-message"
                            text={
                              counter?.key === item.id
                                ? (counter?.count as string)
                                : '1'
                            }
                          />
                        </div>
                      </Tooltip>,
                    ]}
                  >
                    <Meta
                      description={item.description}
                      title={
                        <Link
                          to={`#product_detail/${item.id}/${item.name}`}
                          onClick={() => {
                            setSelectedProduct(item)
                            handleModalState()
                          }}
                        >
                          {item.name}
                        </Link>
                      }
                      avatar={
                        <Avatar src="https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?pid=ImgDet&rs=${index}" />
                      }
                    />
                  </Card>
                ))}
              </Row>
            </Skeleton>
          </Col>
          <Divider type="vertical" />
          <Col xs={0} md={5}>
            <Sider
              breakpoint={'sm'}
              style={{ marginTop: '55px' }}
              theme={'light'}
              width={'100%'}
            >
              <Skeleton loading={false} active>
                <Row justify={'center'}>
                  <Card style={{ width: '100%', height: 350 }}>
                    <Space
                      direction={'vertical'}
                      size={'large'}
                      style={{ textAlign: 'center' }}
                    >
                      <Image
                        preview={false}
                        width={100}
                        src={
                          'https://www.pngall.com/wp-content/uploads/5/Red-Shopping-Cart-PNG-Photo.png'
                        }
                      />
                      <p>
                        Your order qualifies for FREE Shipping. Choose this
                        option at checkout
                      </p>

                      <h3>
                        Subtotal (24 items): <strong> $492.51</strong>
                      </h3>

                      <Button shape={'round'} type={'primary'}>
                        Proceed to checkout
                      </Button>
                    </Space>
                  </Card>
                </Row>
              </Skeleton>
            </Sider>
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
