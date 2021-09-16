// import { useSolanaBalance } from '../..';
// const EXAMPLE_WALLET = 'FeuT9mmNGSDxaUVSMPLxbGhybh8i3mjUGKhpnXHuzyCe';

export const BigButton = () => {
  // const balance = useSolanaBalance(EXAMPLE_WALLET);
  // const { value } = balance || {};

  return (
    <div
      className="
        m-8 px-16 py-8
        text-center
        cursor-pointer 
        rounded-3xl 
        bg-gradient-to-br from-pink-50 to-blue-50 
        border-4 border-blue-100 
        shadow-sm hover:shadow-lg
      "
    >
      <h2
        className="
        font-black
        select-none
        text-blue-700
        opacity-80
      "
      >
        Big Button
      </h2>
    </div>
  );
};
