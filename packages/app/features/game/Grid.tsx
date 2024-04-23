import { YStack, XStack } from '@my/ui';
import Block from './Block';
import Target from './Target';
import Robot from './Robot';

const Grid = ({ targetPosition, robotPosition, gridSize, robotFacing}) => {
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      
      for (let j = 0; j < gridSize; j++) {
        let content = null;
        if (robotPosition.x === j && robotPosition.y === i) {
          content = <Robot transform={robotFacing} />;
        } else if (targetPosition.x === j && targetPosition.y === i) {
          content = <Target />;
        }
        // Generate the cols
        row.push(<Block key={`col-${j}`} id={`b-${i}-${j}`} content={content} />);
      }

      // Generate the rows
      grid.push(
        <YStack key={`row-${i}`}>
          {row}
        </YStack>
      );
    }
    return grid;
  };

  return (
    <XStack elevation={1} fullscreen={false}>
      {renderGrid()}
    </XStack>
  );
};

export default Grid;
