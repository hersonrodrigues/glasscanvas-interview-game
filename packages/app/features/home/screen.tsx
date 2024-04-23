import { YStack } from '@my/ui'
import Game from '../game/Game'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <YStack gap="$4" bc="$background">
        <Game />
      </YStack>
    </YStack>
  )
}