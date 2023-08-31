import {FC} from 'react'

const UserCard: FC= () => {
  return (
    <div className="card mt-7 w-96 bg-base-100 shadow-xl">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">name:</h2>
      <p>Company:</p>
      <p>Works at:</p>
      <p>Location</p>
    </div>
  </div>

  )
}

export default UserCard