import { singleUser } from "../../Components/data"
import Single from "../../Components/single/Single"
import "./user.scss"

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default User