import { ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Form, InputNumber, Tooltip, Image, Row } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CircleButton } from '.'
import { addToShoppingCart } from '../actions/products'
import { ProductsType } from '../reducers/products'

interface ProductCardPros {
  product: ProductsType
}

type CounterType = {
  count: React.Key
  key: React.Key
}

const { Meta } = Card

const ProductCard: React.FC<ProductCardPros> = ({
  product,
}): React.ReactElement => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const [counter, setCounter] = useState<CounterType>()

  const handleAddToCart = () => {
    dispatch(
      addToShoppingCart({
        ...product,
        count: counter?.key === product.id ? Number(counter.count) : 1,
      })
    )
  }

  return (
    <Card
      hoverable
      key={product.id}
      style={{
        marginTop: '30px',
        width: 280,
        minHeight: 350,
        maxHeight: 350,
        borderRadius: '10px',
      }}
      cover={
        <Image
          preview={false}
          width={280}
          style={{ borderRadius: '10px 10px 0 0' }}
          src={
            'https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?pid=ImgDet&rs=1'
          }
        />
      }
      actions={[
        <Form form={form}>
          <Row justify={'center'}>
            <Form.Item initialValue={1} noStyle>
              <InputNumber
                style={{ width: '18%' }}
                defaultValue={1}
                min={1}
                className={'input-number-text-center'}
                bordered={false}
                size={'small'}
                max={product.stock}
                onChange={(e) => setCounter({ count: e, key: product.id })}
              />
            </Form.Item>
            <Form.Item initialValue={1} noStyle>
              <Tooltip title={'Add to shopping cart'}>
                <CircleButton
                  style={{ color: '#333', paddingBottom: 5, margin: 0 }}
                  onClick={handleAddToCart}
                  icon={<ShoppingCartOutlined />}
                />
              </Tooltip>
            </Form.Item>
          </Row>
        </Form>,
      ]}
    >
      <Meta
        description={product.description}
        title={
          <Link to={`#product_detail/${product.id}/${product.name}`}>
            {product.name}
          </Link>
        }
      />
    </Card>
  )
}

export default ProductCard
