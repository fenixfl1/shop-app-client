import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/products'
import { RoutesWrapper } from '../components'
import { WEB_SERVICE_API_PRODUCTS } from '../constants/routes'
import { StoreState } from '../reducers'
import products from '../constants/products.json'
import { Avatar, Card, Row, Image, Tooltip, InputNumber, Form } from 'antd'
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form'

const { Meta } = Card

const Home = (): React.ReactElement => {
  const [form] = useForm()
  const dispatch = useDispatch()
  // const { products } = useSelector((state: StoreState) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <RoutesWrapper>
      <Row justify={'space-between'}>
        {products.map((item) => (
          <Card
            style={{ marginTop: '20px', width: 300 }}
            key={item.id}
            cover={<Image width={300} src={item.image} />}
            actions={[
              <Form form={form}>
                <Form.Item initialValue={1}>
                  <InputNumber bordered={false} />,
                </Form.Item>
              </Form>,

              <Tooltip title={'Add to shopping cart'}>
                <ShoppingCartOutlined key="ellipsis" />
              </Tooltip>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description={item.description}
            />
          </Card>
        ))}
      </Row>
    </RoutesWrapper>
  )
}

export default Home
