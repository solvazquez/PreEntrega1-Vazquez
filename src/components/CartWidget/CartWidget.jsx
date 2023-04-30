import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://www.pikpng.com/pngl/b/464-4646442_carrito-de-compras-carro-de-compras-blanco-clipart.png";
  return (

    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
      <strong className='numeroCarrito' >6</strong>
    </div>
  )
}

export default CartWidget
