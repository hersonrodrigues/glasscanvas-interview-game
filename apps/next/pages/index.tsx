import Game from 'app/features/game/Game'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Glass Canvas - Robot Game</title>
      </Head>
      <Game />
    </>
  )
}