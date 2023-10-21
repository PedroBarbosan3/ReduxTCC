import { Button, Col, Form, Input, List, Row } from "antd";
import { useState } from "react";

interface formValues {
  texto: string;
}

const DemonstracaoEstado = () => {
  const [form] = Form.useForm<formValues>();
  const [listaTextos, setListaTextos] = useState<string[]>(["Texto inicial"]);

  const submit = (values: formValues) => {
    const novaLista = [...listaTextos];
    novaLista.push(values.texto);
    return setListaTextos(novaLista);
  };

  return (
    <>
      <Form form={form} onFinish={submit} layout="vertical">
        <Row gutter={8}>
          <Col span={6}>
            <Form.Item label="Adicione um texto:" name="texto">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label=" ">
              <Button htmlType="submit">SALVAR</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={8}>
        <Col span={6}>
          <List
            itemLayout="horizontal"
            dataSource={listaTextos}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta description={<h3>{item}</h3>} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default DemonstracaoEstado;
