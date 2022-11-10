import "./styles/index.scss";
import AboutProjectPage from "./pages/AboutProjectPage/AboutProjectPage";
import { Layout } from "./components";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <AboutProjectPage />
      </Layout>
    </div>
  );
};
export default App;
