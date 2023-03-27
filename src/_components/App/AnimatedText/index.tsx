import React from "react";

type Props = {
  header?: string;
  desc?: string;
  link?: string;
  linkDescription?: string;
  className?: string;
};

const AnimatedText = ({ header, desc, link ,className,linkDescription }: Props) => {
  return (
    <div className={className || 'description-card' }>
      <h2 className="animated-text1">{header}</h2>
      <p className="animated-text2" >{desc}</p>
      <a href={link} target="_blank" rel="noreferrer" className="animated-text2">{linkDescription}</a>
    </div>
  );
};

export default AnimatedText;
