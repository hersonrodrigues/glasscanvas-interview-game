import { useState, useEffect } from 'react';
import { Button, H1, H5, YStack, Image, Input, XStack, ScrollView, Text } from '@my/ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const GameOver = ({ score, handleReset }) => {
  const [name, setName] = useState('')
  const [scoreData, setScoreData] = useState([])

  useEffect(() => {
    async function loadLastScoreName() {
      const name = await AsyncStorage.getItem('last-name-score');
      if (name) {
        setName(name);
      }

      const scoreDataStorage = await AsyncStorage.getItem('game-score');
      if (scoreDataStorage != null) {
        const scoreSataPaesed = JSON.parse(scoreDataStorage);
        setScoreData(scoreSataPaesed);
      }
    }
    loadLastScoreName();
  }, []);

  const saveAndReset = async () => {
      try {
        let gameScore;
        const scoreData = await AsyncStorage.getItem('game-score');

        if (scoreData) {
          gameScore = JSON.parse(scoreData);
        } else {
          gameScore = [];
        }

        gameScore.push({score:score, name: name, date:new Date()});
        await AsyncStorage.setItem('game-score', JSON.stringify(gameScore));
        await AsyncStorage.setItem('last-name-score', name);

        // Sort by score in descending order
        gameScore.sort((a, b) => b.score - a.score);

        setScoreData(gameScore.reverse())
        
      } catch (e) {
        Alert.alert("Error saving the score: "+ String(e));
      }

      handleReset()
  }
  return (
    <YStack>
      <H1>Game Over</H1>
      <YStack alignItems="center">
        <Image mt={'$2'} animation={'bouncy'} alignContent="center" source={{height:100, width: 100, uri: "https://i.ibb.co/hY4ZvRN/robot-died.png"}}/>
        <XStack mt={20}>
          <Input placeholder="Your name.." value={name} onChangeText={(e) => setName(e)} />
        </XStack>
        <H5 mt={'$5'}>Your Score: {score}</H5>
        <ScrollView mt={15} p={10} maxHeight={200}>
          {scoreData.map((item, index) => (
            <XStack key={index} justifyContent="space-between" alignItems="center">
              {item && item.name != null &&
              <>
                <Text>{item.name}</Text>
                <Text ml={5}>({item.score})</Text>
              </>
              }
            </XStack>
          ))}
        </ScrollView>
      </YStack>
      <Button onPress={() => saveAndReset()} mt={'$4'}>Restart</Button>
    </YStack>
  );
};

export default GameOver;
