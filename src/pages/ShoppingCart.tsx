import React from 'react'
import { Row, Col, Table, Button, Space } from 'antd'
import { ColumnType } from 'antd/lib/table'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromShippingCart } from '../actions/products'
import RoutesWrapper from '../components/RoutesWrapper'
import { StoreState } from '../reducers'
import { ProductsType } from '../reducers/products'
import { DollarTwoTone } from '@ant-design/icons'
import { isLoggedIn } from '../utils/session'
import { Redirect } from 'react-router-dom'
import { PATH_LOGIN } from '../constants/routes'

const ShoppingCart = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { shoppingCart } = useSelector((state: StoreState) => state.products)

  const handleRemove = (record: ProductsType) => {
    dispatch(removeProductFromShippingCart(record.id))
  }

  const handleCheckout = () => {
    if (!isLoggedIn()) {
      return (
        <Redirect
          to={`${PATH_LOGIN}?next=${window.location.pathname.replace('/', '')}`}
        />
      )
    }
  }

  const columns: ColumnType<ProductsType>[] = [
    {
      dataIndex: 'image',
      key: 'image',
      width: '20%',
      render: (_, record) => {
        return (
          <Col xs={24} style={{ maxHeight: '200px' }}>
            <img
              style={{ maxHeight: 150, width: 150 }}
              src={record.image}
              alt={record.name}
            />
            <h3
              style={{
                maxHeight: '60px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {record.name} <span>(X{record.count})</span>
            </h3>
          </Col>
        )
      },
    },
    {
      dataIndex: '',
      key: 'name',
    },
    {
      title: 'SubTotal',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
      render: (_, record) => `USD $ ${record.price * record.count}`,
    },
    {
      width: '3%',
      render: (_, record) => {
        return (
          <Button type={'link'} onClick={() => handleRemove(record)}>
            Remove
          </Button>
        )
      },
    },
  ]

  return (
    <RoutesWrapper allowSearch={false}>
      <Row justify={'center'} align={'middle'} style={{ marginTop: '25px' }}>
        <Col xs={18}>
          <Table
            pagination={false}
            dataSource={shoppingCart}
            columns={columns}
            summary={(record) => {
              let total = 0

              record.forEach(({ count, price }) => {
                total += price * count
              })

              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={2} index={1}>
                      <strong>Total:</strong>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={0} align={'center'}>
                      <strong>
                        USD $
                        {String(total).replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ',')}
                      </strong>
                    </Table.Summary.Cell>
                    {total > 0 && (
                      <Table.Summary.Cell index={0} align={'center'}>
                        <Button
                          size={'small'}
                          shape={'round'}
                          type={'link'}
                          icon={<DollarTwoTone style={{ fontSize: '16px' }} />}
                          onClick={handleCheckout}
                        >
                          Checkout
                        </Button>
                      </Table.Summary.Cell>
                    )}
                  </Table.Summary.Row>
                </>
              )
            }}
          />
        </Col>
      </Row>
    </RoutesWrapper>
  )
}

export default ShoppingCart
