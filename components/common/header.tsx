import  React from 'react';

export interface HeaderProps {
}

export default function Header (props: HeaderProps) {
    console.log('rendern header');
    
  return (
    <div className="header">
      Header
    </div>
  );
}
