import BlockImage from './BlockImage';

const Robot = ({ transform }) => {
  return (
    <BlockImage 
      imageSrc={transform} />
  );
};

export default Robot;
