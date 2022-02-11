import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/products'
import { ProductCard, RoutesWrapper } from '../components'
import { StoreState } from '../reducers'
import { Row, Skeleton, Col, Carousel, Modal, Menu } from 'antd'
import { ProductsType } from '../reducers/products'

const Home = (): React.ReactElement => {
  const dispatch = useDispatch()
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
                      background: '#00474f',
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
        ... ...
        <br />
        ... ...
        <br />
        ... ...
        <br />
        ... ...
        <br />
        ... ...
        <br />
        ... ...
      </Modal>
    </>
  )
}

export default Home
