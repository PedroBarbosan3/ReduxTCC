import { Button, Col, Divider, Form, Input, Row, Space } from "antd";
import { useAppDispatch } from "../../../util/hooks";
import { CategoriasModel } from "../../../models/classico/categoriasModel";
import { adicionarCategoria } from "../../../reduxToolkit/slices/Lista/listagemSlice";

export const ModalCategoriaToolkit = () => {
  //hooks
  const dispatch = useAppDispatch();

  //estados locais
  const [form] = Form.useForm();

  const submit = (values: CategoriasModel) => {
    let addCategoria: CategoriasModel = {
      id: values.descricao,
      descricao: values.descricao,
    };
    dispatch(adicionarCategoria(addCategoria));
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

export default ModalCategoriaToolkit;
