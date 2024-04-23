import { useState, useEffect } from 'react';
import { YStack, XStack, Text, Spacer } from '@my/ui';

import Grid from './grid';
import Controls from './controls';
import Timer from './timer';
import GameOver from './GameOver';

const Game = () => {
  const directions = ['https://i.ibb.co/8BxfQRx/r-down.png', 'https://i.ibb.co/y4krmQx/r-left.png', 'https://i.ibb.co/cCv2sHt/r-top.png', 'https://i.ibb.co/gyBXKww/r-right.png'];
  const [gridSize, setGridSize] = useState(5);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [targetPosition, setTargetPosition] = useState({x:0,y:0});
  const [robotPosition, setRobotPosition] = useState({x:0,y:0});
  const [robotFacing, setRobotFacing] = useState(directions[0]);
  
  useEffect(() => {
    // Beginning od the game rules
    newGame();
  }, []);

  useEffect(() => {
    // Check if the new position is the same as the target position (means the target was hit)
    if (robotPosition.x === targetPosition.x && robotPosition.y === targetPosition.y) {
      setScore(score + 1);
      handleReset(false);
    }
  }, [robotPosition]);

  const newGame = () => {
    setTimeLeft(60);
    setScore(0);
    setRobotInitialPosition()
    setRobotFacing(directions[2]) // face up
    newTargetPosition();
    setGameOver(false);
  }

  const endGame = () => {
    setGameOver(true);
  };

  const handleTimeLeft = () => {
    setTimeLeft((prevTime) => prevTime - 1);
  };

  const newTargetPosition = () => {
    // make sure to not set at the same position as the robot
    const newTargetPosition = generateRandomPosition(robotPosition);
    setTargetPosition(newTargetPosition);
  }

  const handleReset = (startBrandNewGame) => {
    if(startBrandNewGame) {
      newGame();
    } else {
      newTargetPosition();
      setGameOver(false);
    }
  };

  const setRobotInitialPosition = () => {
    const initial = Math.floor(gridSize / 2);
    setRobotPosition({ x: initial, y: initial });
  };

  // Generate a random position, different then the param position passed (robot or target)
  function generateRandomPosition(diffPos) {
    let newPosition;
    do {
      newPosition = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    } while (
      (newPosition.x === diffPos.x && newPosition.y === diffPos.y)
    );
    console.log("diff", diffPos, "new", newPosition);
    return newPosition;
  }

  const handleMove = () => {
    const movements = {
      'https://i.ibb.co/8BxfQRx/r-down.png': { x: 1, y: 0 }, // Down
      'https://i.ibb.co/y4krmQx/r-left.png': { x: 0, y: -1  }, // Left
      'https://i.ibb.co/cCv2sHt/r-top.png': { x: -1, y: 0 }, // Up
      'https://i.ibb.co/gyBXKww/r-right.png': { x: 0, y: 1 }, // Right
    };
  
    const { x: moveX, y: moveY } = movements[robotFacing];
    const newRobotPosition = { ...robotPosition, x: robotPosition.x + moveX, y: robotPosition.y + moveY };
  
    // Check if the new position is outside the grid boundaries
    if (
      newRobotPosition.x < 0 ||
      newRobotPosition.x >= gridSize ||
      newRobotPosition.y < 0 ||
      newRobotPosition.y >= gridSize
    ) {
      endGame();
    } else {
      setRobotPosition(newRobotPosition); // Update the robot position
    }
  };
  
  const handleRotate = (direction) => {
    const currentIndex = directions.indexOf(robotFacing);
    let newIndex;
    if (direction === 'right') {
      newIndex = (currentIndex + 1) % 4;
    } else if (direction === 'left') {
      newIndex = (currentIndex + 3) % 4;
    }
    const newFacing = directions[newIndex];
    console.log("newFacing", newFacing);
    setRobotFacing(newFacing);
  };
  
  return (
    <YStack p={16} alignContent="center" alignItems="center">
      {gameOver && <GameOver score={score} handleReset={() => handleReset(true)} />}  
      {!gameOver && 
        <>
          <XStack>
            <Timer timeLeft={timeLeft} handleTimeLeft={handleTimeLeft} endGame={endGame} />
            <Spacer />
            <Text>Score: {score}</Text>
          </XStack>
          
          <Grid 
            gridSize={gridSize} 
            targetPosition={targetPosition} 
            robotPosition={robotPosition} 
            robotFacing={robotFacing}
          />

          <Controls 
            handleMove={handleMove} 
            handleRotateRight={() => handleRotate('right')} 
            handleRotateLeft={() => handleRotate('left')}  
            handleReset={() => handleReset(false)}
          />        

        </>
      }   
    </YStack>
  );
};

export default Game;
