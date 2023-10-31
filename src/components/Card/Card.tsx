interface ICardProps {
  title: string;
  bgColor: string;
  padding?: '10px' | '20px' | '30px';
}

export const Card = ({ title, bgColor, padding }: ICardProps) => {
  return <div style={{ backgroundColor: bgColor, padding }}>{title}</div>;
};
