import React from 'react';


type mainProps = {
  children?: React.ReactNode;
}

const MainHeader = ({children}:mainProps) => {
  return <header className="main-header">{children}</header>;
};

export default MainHeader;
