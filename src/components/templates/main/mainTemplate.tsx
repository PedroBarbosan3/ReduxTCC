import "./style/mainTemplate.scss";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "antd";
import SiderMenu from "../siderMenu/siderMenu";
import { useAppDispatch, useAppSelector } from "../../../util/assets/hooks";
import { changeMenu } from "../../../redux/configuracoesSlice";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const { Header, Footer, Sider, Content } = Layout;

const MainTemplate = ({ children }: any) => {
  const configuracoesState = useAppSelector((state) => state.configuracoes);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  return (
    <Layout
      style={{
        backgroundColor: "#491bdf",
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={configuracoesState.menu}
        collapsedWidth={"8vh"}
        trigger={null}
        style={{
          backgroundColor: "#491bdf",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div
          className="logo"
          onClick={() => dispatch(changeMenu(!configuracoesState.menu))}
        >
          {configuracoesState.menu ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )}
        </div>
        <SiderMenu />
      </Sider>
      <Layout
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <Header
          style={{
            backgroundColor: "white",
            padding: 0,
          }}
        >
          Header
        </Header>
        <Content>{children}</Content>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </Layout>
  );
};

export default MainTemplate;
