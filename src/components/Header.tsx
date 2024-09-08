import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 p-4">
      <div className="container mx-auto flex items-center">
        <Image src="/noBGCBS.png" alt="My Logo" width={100} height={50} />
        {/* You can add navigation items here later */}
      </div>
    </header>
  );
};