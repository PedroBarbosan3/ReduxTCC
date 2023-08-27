import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../services/accountService";
import { useAppDispatch } from "../../util/assets/hooks";
import { authenticateModel } from "../../models/authenticateModel";
import { ToastContainer } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [form] = Form.useForm<authenticateModel>();

  const submit = async (value: authenticateModel) => {
    //const retorno = await dispatch(authenticate(value));
    navigate("/base")
  };
  return (
    <>
      <Form form={form} layout="vertical" onFinish={submit}>
        <Form.Item
          label="EMAIL"
          name="email"
          rules={[
            {
              required: false,
              message: "Digite seu email",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input type="text" placeholder="Digite aqui seu email" />
        </Form.Item>

        <Form.Item
          label="SENHA"
          name="password"
          rules={[
            {
              required: false,
              message: "Digite sua senha",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input type="password" placeholder="Digite aqui sua senha" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            CLIQUE AQUI PARA IR A BASE
          </Button>
        </Form.Item>
      </Form>
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
    </>
  );
};

export default Login;
