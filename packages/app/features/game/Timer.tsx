import { useEffect } from 'react';
import { XStack,  Text } from '@my/ui';

const Timer = ({ timeLeft, handleTimeLeft, endGame }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      handleTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [handleTimeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, endGame]);

  return (
    <XStack>
        <Text color={timeLeft <= 10 ? '$red10Light' : 'white'}>Time left: {timeLeft}</Text>
    </XStack>
  );
};

export default Timer;
