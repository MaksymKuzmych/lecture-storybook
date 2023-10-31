import { ChangeEvent } from 'react';

interface IMyInputProps {
  title: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
  borderRadius?: string;
}

export const MyInput = ({
  title,
  value,
  handleChange,
  bgColor,
  borderRadius,
}: IMyInputProps) => {
  return (
    <>
      <p>{title} 12345</p>
      <div style={{ backgroundColor: bgColor, borderRadius, padding: '30px' }}>
        <input type='text' value={value} onChange={handleChange} />
      </div>
    </>
  );
};
