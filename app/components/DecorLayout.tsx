import Image from 'next/image';
import React from 'react';

type DecorElement = {
  id: string;
  type: 'svg';
  src?: string; 
  className?: string;
  style?: React.CSSProperties;
  bgColor?: string; 
};

type Props = {
  elements: DecorElement[];
};

export default function DecorLayout({ elements }: Props) {
  return (
    <>
      {elements.map((el) => {
        if (el.type === 'svg' && el.src) {
          return (
            <div
              key={el.id}
              className={`absolute ${el.className ?? ''}`}
              style={el.style}
            >
              <Image src={el.src} alt={el.id} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
            </div>
          );
        }

        return null;
      })}
    </>
  );
}
