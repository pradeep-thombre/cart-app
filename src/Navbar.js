import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png" style={styles.cartIcon} alt='Cart'/>
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 70,
    background:  '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount:  {
    background: 'yellow',
    borderRadius: '50%',
    padding:  '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default Navbar;