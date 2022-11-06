const Header = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-5">
      <ul>
        <li className="cursor-pointer select-none bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-2xl font-bold text-transparent">
          <a href="/">Jayson Acosta</a>
        </li>
      </ul>
      <ul className="hover: flex justify-between gap-x-4">
        <li className="cursor-pointer select-none bg-gradient-to-r from-indigo-700 to-pink-400 bg-clip-text text-lg font-bold text-neutral-900 duration-200 ease-in hover:text-transparent">
          <a href="/recent">Recent</a>
        </li>
        <li className="cursor-pointer select-none bg-gradient-to-r from-indigo-700 to-pink-400 bg-clip-text text-lg font-bold text-neutral-900 duration-200 ease-in hover:text-transparent">
          <a href="/posts">Posts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
