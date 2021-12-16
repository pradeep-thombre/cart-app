import React from 'react';

class CartItem extends React.Component {
  render () {
    const { qty, price, title } = this.props.product;
    const { product } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{ height: 110, width: 110, borderRadius: 5, background: '#ccc' }}
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img 
              alt="add"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVKt-0nNsbeqh5wyHhfeaIK1G5rCnEDn_n9Qp_FhBqa0AL7xAxFoij90igy6tcZ-GCOw&usqp=CAU"
              className="action-icons"
              onClick={() => this.props.onIncreaseQuantity(product)}
            />
            <img
              alt="minus"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWtrGIGQRSoyTsm0HNJrbx27CdG2CoJUf3WSqJEshfkjISoSbgP29suut53HCXVDfdNE&usqp=CAU"
              className="action-icons"
              onClick={() => this.props.onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWafqgyvpKnssVbQtdkqM0GNZM8L54PEpyQw&usqp=CAU"
              className="action-icons"
              onClick={() => this.props.onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;