import { FC } from 'react';
import { User } from 'interfaces/User';

type UserCardProps = {
  foundUser: User | null;
};

const UserCard: FC<UserCardProps> = ({ foundUser }) => {
  console.log(foundUser?.avatar_url);

  return (
    <div className="card mt-7 w-96 bg-base-100 shadow-xl">
      <figure className='h-[300px]'><img src={foundUser?.avatar_url || "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Name: {foundUser?.login}</h2>
        <p><span className='font-bold'>Company:</span> {foundUser?.company}</p>
        <p><span className='font-bold'>Works at:</span> {foundUser?.location}</p>
        <p><span className='font-bold'>Location:</span> {foundUser?.location}</p>
      </div>
    </div>
  );
};

export default UserCard;
