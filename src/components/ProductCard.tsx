import { ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Form, InputNumber, Tooltip, Image, Row } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CircleButton } from '.'
import {
  addToShoppingCart,
  setModalStateForProductDetail,
} from '../actions/products'
import { ProductsType } from '../reducers/products'

interface ProductCardPros {
  product: ProductsType
  onSelect?: (product: ProductsType) => void
}

type CounterType = {
  count: React.Key
  key: React.Key
}

const { Meta } = Card

const ProductCard: React.FC<ProductCardPros> = ({
  product,
  onSelect,
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
        <img
          src={product.image}
          style={{
            borderRadius: '10px 10px 0 0',
            width: '280px',
            height: '175px',
            objectFit: 'contain',
          }}
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
        description={
          <span
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              // overflow: 'hidden',
            }}
          >
            {product.description}
          </span>
        }
        title={
          <Link
            to={`#product_detail/${product.id}/${product.name}`}
            onClick={() => {
              if (typeof onSelect === 'function') onSelect(product)
              dispatch(setModalStateForProductDetail(true))
            }}
          >
            {product.name}
          </Link>
        }
      />
    </Card>
  )
}

export default ProductCard
