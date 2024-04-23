import { Image } from '@my/ui';

const BlockImage = ({ imageSrc }) => {
  return (
    <Image 
        animation={'bouncy'} 
        source={{ width: 80, height: 80, uri: imageSrc}} />
  );
};

export default BlockImage;