import "./style/mainTemplate.scss";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "antd";
import { ToastContainer } from "react-toastify";

const { Header, Content } = Layout;

const MainTemplate = ({ children }: any) => {
  return (
    <Layout
      style={{
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
      }}
    >
      <Layout
        style={{
          padding: "24px",
        }}
      >
        <Header
          style={{
            backgroundColor: "#ffffff",
            padding: "0 24px",
            border: "1px solid #dcdcdc",
            borderRadius: "10px",
            color: "#000000",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          REDUX TCC
        </Header>
        <Content
          style={{
            marginTop: "24px",
          }}
        >
          {children}
        </Content>
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
