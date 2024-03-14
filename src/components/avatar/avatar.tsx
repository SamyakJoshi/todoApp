import React from 'react';
import Image from 'next/image';
import { IUserDetail, fetchUsers } from '../../lib/actions/users';

const Avatar = async () => {
  const usersData = await fetchUsers();

  return (
    <div className="flex items-center justify-center bg-slate-400 p-2 px-3 min-w-[284px] rounded-md m-auto">
      <div className="flex rounded">
        {usersData &&
          usersData.slice(0, 4).map((user: IUserDetail, index: number) => (
            <div key={user._id} className={`w-10 relative h-10 flex ${index > 0 ? '-ml-3' : ''}`}>
              <Image
                fill
                src={user.profilePic}
                alt={user.username}
                className="w-10 h-10 rounded-full border-2 border-solid border-white"
              />
            </div>
          ))}
      </div>
      {usersData.length > 4 && (
        <div className="text-xs flex p-4 text-white font-medium">
          <p>and {usersData.length - 4} Other People</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
