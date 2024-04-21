import React from 'react'

export default function Footer() {
  return (
    <div className="text-lightGrayText text-xxs smallMobile:text-xs regularMobile:text-xl laptop:text-2xl desktop:text-2xl text-center py-2">
      GHE Digital Portfolio {new Date().getFullYear()}
    </div>
  );
};