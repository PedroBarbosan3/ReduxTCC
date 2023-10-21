import { Button, Col, Divider, Form, Input, Row, Space } from "antd";
import { CategoriasModel } from "../../../../models/classico/categoriasModel";
import { useDispatch } from "react-redux";
import { ListagemState } from "../../../../redux/reducers/listagemReducer";
import { useTypedSelector } from "../../../../redux/store/store";

export const ModalCategoria = () => {
  //hooks
  const dispatch = useDispatch();

  //estados locais
  const [form] = Form.useForm();

  const submit = (values: CategoriasModel) => {
    let adicionarCategoria: CategoriasModel = {
      id: values.descricao,
      descricao: values.descricao,
    };
    dispatch({ type: "ADICIONAR_CATEGORIA" ,payload: adicionarCategoria });
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Form form={form} layout="vertical" onFinish={submit}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form.Item label="Descrição" name="descricao">
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Space size="middle" style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button htmlType="submit" className="buttonPrimary">
                SALVAR
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Space>
  );
};

export default ModalCategoria;
