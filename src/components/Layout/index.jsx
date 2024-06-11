import { Link, Outlet } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useTheme } from "../../context/theme_context";
import "./index.css";
import { Stack } from "react-bootstrap";

const Layout = () => {
  const { theme, onChangeTheme } = useTheme();

  const onToggleTheme = () => {
    onChangeTheme();
  };

  return (
    <div className={`${theme}`}>
      <div>Layout</div>
      <hr />
      <Stack className="layout" direction="horizontal" gap={2}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <div>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              label="Mode"
              checked={theme === "dark"}
              onChange={onToggleTheme}
            />
          </Form>
        </div>
      </Stack>

      <Outlet />
    </div>
  );
};

export default Layout;
