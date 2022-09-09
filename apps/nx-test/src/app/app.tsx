// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { libA } from '@nx-test/lib-a';
import { libB } from '@nx-test/lib-b';
import { libC } from '@nx-test/lib-c';

export function App() {
  return (
    <>
      <NxWelcome title="nx-test" />
      <div />
      {libA()}
      {libB()}
      {libC()}
    </>
  );
}

export default App;
