import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { useSelector } from 'react-redux'

// per fare in modo che CartIndicator rifletta sempre la vera lunghezza
// dell'array cart.content, dobbiamo fornire a CartIndicator accesso
// allo store di Redux!

// ogni componente della nostra applicazione è collegabile direttamente
// allo store di Redux

// vogliamo collegare CartIndicator in modalità "lettura", per leggere
// la lunghezza del carrello
// per fare ciò utilizziamo un Hook di react-redux -> useSelector()

const CartIndicator = () => {
  const navigate = useNavigate()
  const arrayOfBooksInTheCart = useSelector((store) => {
    // store è TUTTO lo stato di Redux
    return store.cart.content
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{arrayOfBooksInTheCart.length}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
