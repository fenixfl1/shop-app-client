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
    form.resetFields([`${product.name}-${product.id}`])
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
        minHeight: 380,
        maxHeight: 380,
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
          <Row justify={'center'} align={'middle'}>
            <Form.Item
              initialValue={1}
              noStyle
              name={`${product.name}-${product.id}`}
            >
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
                  style={{ color: '#333', margin: '5px 0 0 2px' }}
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
            }}
          >
            {product.description}
          </span>
        }
        title={
          <Row justify={'start'}>
            <Link
              style={{ width: '100%' }}
              to={`#product_detail/${product.id}/${product.name}`}
              onClick={() => {
                if (typeof onSelect === 'function') onSelect(product)
                dispatch(setModalStateForProductDetail(true))
              }}
            >
              {product.name}
            </Link>
            <span style={{ fontSize: 14 }}>
              USD $
              {String(product.price).replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ',')}
            </span>
          </Row>
        }
      />
    </Card>
  )
}

export default ProductCard
