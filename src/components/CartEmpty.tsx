import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className='cart-empty'>
        <h2>ваша корзина пуста</h2>
        <Link className='btn' to="/">
            на главную
        </Link>
    </div>
  )
}

export default CartEmpty;