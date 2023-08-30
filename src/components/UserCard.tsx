import {FC} from 'react'

const UserCard: FC= () => {
  return (
    <div className=" max-w-[90vw] aspect-[16/9] mx-5 mt-10 w-[375px] bg-slate-300 overflow-hidden">
  <figure><img src="" alt="Movie"/></figure>
  <div className="">
    <p>name:</p>
    <p>Company:</p>
    <p>Location:</p>
    <p>Followers:</p>

    </div>
  </div>
  )
}

export default UserCard