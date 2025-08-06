import { singleProduct } from "../../Components/data"
import Single from "../../Components/single/Single"
import "./product.scss"

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product