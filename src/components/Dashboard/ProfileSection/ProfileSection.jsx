/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from "next/dynamic";

const ProfileSection = () => {
  return (
    <div>
      <div className="flex gap-5 font-poppins">
        {/* <div>
                    <img className="w-40" alt="image" src={userInfo?.image} />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">{userInfo?.name}</h3>
                    <p className="text-lg">{userInfo?.role === 'user' ? 'User' : 'Premium'}</p>
                </div> */}
        profile section
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProfileSection), { ssr: false });
