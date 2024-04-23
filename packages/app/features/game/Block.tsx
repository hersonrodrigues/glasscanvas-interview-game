import { View } from '@my/ui';

const Block = ({ id, content }) => {
  return (
    <View key={id} id={id} width={100} height={100} p={5} bw={1} bc={"$gray10Dark"} boc={"$blue5Dark"} >
      {content}
    </View>
  );
};

export default Block;
