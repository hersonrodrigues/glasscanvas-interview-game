import { Button,  XStack } from '@my/ui';
import { ArrowDownLeft, ArrowDownRight, StepForward } from '@tamagui/lucide-icons';

const Controls = ({handleMove, handleRotateRight, handleRotateLeft, handleReset}) => {
  return (
    <XStack mt={5} gap={5}>
        <Button onPress={handleRotateLeft}>
          <Button.Icon>
            <ArrowDownLeft />
          </Button.Icon>
          <Button.Text>90° left</Button.Text>
        </Button>
        <Button onPress={handleRotateRight}>
          <Button.Icon>
            <ArrowDownRight />
          </Button.Icon>
          <Button.Text>90° right</Button.Text>
        </Button>
        <Button onPress={handleMove}>
          <Button.Icon>
            <StepForward />
          </Button.Icon>
          <Button.Text>Step</Button.Text>
        </Button>
        <Button onPress={handleReset}>
          <Button.Text>Reset</Button.Text>
        </Button>
    </XStack>
  );
};

export default Controls;
