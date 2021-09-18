// import { useSolanaBalance } from '../..';
// const EXAMPLE_WALLET = 'FeuT9mmNGSDxaUVSMPLxbGhybh8i3mjUGKhpnXHuzyCe';

export const BigButton = () => {
  return (
    <div
      className="
        m-8 px-16 py-8
        text-center
        cursor-pointer 
        rounded-3xl 
        bg-gradient-to-br from-pink-50 to-blue-50 
        border-4 border-blue-200 border-opacity-25
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

export const SmallButton = () => {
  return (
    <button
      className="
        m-8 px-8 py-4
        text-center
        cursor-pointer 
        rounded-2xl 
        bg-gradient-to-br from-pink-50 to-blue-50 
        border-4 border-blue-200 border-opacity-50
        shadow-sm hover:shadow-lg
      "
    >
      <h3
        className="
        font-black
        select-none
        text-blue-700
        opacity-80
      "
      >
        Check
      </h3>
    </button>
  );
};
