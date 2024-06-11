import { useTheme } from "../../context/theme_context";

const Home = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className={`${theme}`}>
      <h1 className={`${theme}`}>This is Home page</h1>
    </div>
  );
};

export default Home;
