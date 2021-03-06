import Head from 'next/head'
import Image from 'next/image'

// import { ExampleComponent, useSolanaBalance } from '../../../dist/components';
import { useSolanaBalance } from '../../../dist/hooks/useBalance';
import { usePubkey } from '../../../dist/hooks/usePubkey';
import { SmallButton } from '../../../dist/components/Button';
import { getAssociatedBalance } from '../../../dist/token/utils';
import { createScopedState } from 'create-scoped-state';
import { useSolanaState } from '../../../dist/context';
import { createRef } from 'react';

const EXAMPLE_WALLET = 'FeuT9mmNGSDxaUVSMPLxbGhybh8i3mjUGKhpnXHuzyCe';

const [TokenBalanceProvider, useTokenBalance] = createScopedState({
  tokenBalance: null,
});

const AssociatedAddressBalance = () => {
  const { tokenBalance } = useTokenBalance();
  return (
    <div className="w-full grid grid-cols-2">
      {tokenBalance && <h4>Balance</h4>}
      <h3 className="text-gray-500">
        {tokenBalance ? `${tokenBalance} units` : null}
      </h3>
    </div>
  );
}

const MintBalanceForm = () => {
  const mintAddressInputRef = createRef<HTMLInputElement>();
  const { connection, pubkey } = useSolanaState();
  const { updateState } = useTokenBalance();
  return (
    <form
      className="w-full max-w-lg flex flex-col items-center text-center justify-center mx-8"
      onSubmit={(e) => {
        e.preventDefault();
        (async () => {
          const loadedTokenBalance = await getAssociatedBalance(
            connection,
            pubkey,
            mintAddressInputRef.current.value
          );
          updateState({ tokenBalance: loadedTokenBalance.value.uiAmountString })
        })();
      }}
    >
      <label className="p-2 text-gray-500" htmlFor="mint">Mint Address</label>
      <input
        ref={mintAddressInputRef}
        id="mint"
        type="text"
        className="w-full rounded-lg bg-blue-100 bg-opacity-25 max-w-lg m-4 py-4 text-center"
        placeholder="Enter Mint Address"
        required
        pattern="\w{44}"
      />

      <AssociatedAddressBalance />
      <SmallButton />
    </form>
  );
}

export default function Home() {
  const { value, context } = useSolanaBalance(EXAMPLE_WALLET) || {};
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="my-8 md:my-16 font-size-3 text-center">
          Get started by editing{' '}
          <code className="code">pages/index.tsx</code>
        </p>

        {/* CHAIN INFO */}

        <span className="font-size-xs">{EXAMPLE_WALLET}</span>
        <div className="m-8 grid grid-cols-2 text-center items-center">
          <h4>Balance</h4>
          <h3 className="text-gray-500">
            {value ? `${value / 10 ** 9} SOL` : 'Loading...'}
          </h3>
        </div>
        <span className="font-size-xs italic">
          {context?.slot ? `As of Slot ${context.slot}` : 'Loading...'}.
        </span>

        <hr className="my-8" />

        <TokenBalanceProvider>
          <MintBalanceForm />
        </TokenBalanceProvider>

        <div className="grid md:grid-cols-2">
          <a href="https://nextjs.org/docs" className="card">
            <h4>Documentation &rarr;</h4>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h4>Learn &rarr;</h4>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h4>Examples &rarr;</h4>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h4>Deploy &rarr;</h4>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          className="flex-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="flex-center h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
