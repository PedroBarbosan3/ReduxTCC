import { Button, Col, Form, List, Row, Space, Image, Empty, Input, Divider } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FilmesModel } from "../../../../models/classico/filmesModel";
import { SearchOutlined } from "@ant-design/icons";
import { ListagemState } from "../../../../redux/reducers/listagemReducer";
import { useTypedSelector } from "../../../../redux/store/store";
import { buscarFilme } from "../../../../redux/actions/listagemActions";

export const ModalFilme = () => {
  //estados globais
  const listagemState: ListagemState = useTypedSelector((state) => state.listagem);

  //hooks
  const dispatch = useDispatch();

  //estados locais
  const [form] = Form.useForm();
  const [titulo, setTitulo] = useState<string>("");

  const submit = (values: any) => {
    let adicionarFilme: FilmesModel = {
      id: listagemState.filmeEncontrado.id,
      titulo: listagemState.filmeEncontrado.titulo,
      imagem: listagemState.filmeEncontrado.imagem,
      descricao: listagemState.filmeEncontrado.descricao,
      categoria: values.categoria,
    };
    dispatch({ type: "ADICIONAR_FILME", payload: adicionarFilme });
  };

  const onChangeFilme = (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitulo(value.target.value);
  };

  const procurarFilme = async () => {
    await dispatch(buscarFilme(titulo));
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Form layout="vertical" form={form} onFinish={submit}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form.Item label="Filme">
              <div style={{ display: "flex", gap: "5px" }}>
                <Input onChange={onChangeFilme} type="text" />
                <Button icon={<SearchOutlined rev={undefined} />} onClick={procurarFilme}>
                  Procurar filme
                </Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form.Item label="Categoria" name="categoria">
              <Input type="text" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            {listagemState.filmeEncontrado.id !== undefined ? (
              <List
                itemLayout="horizontal"
                dataSource={[listagemState.filmeEncontrado]}
                loading={listagemState.loading}
                renderItem={(item, index) => (
                  <List.Item>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
                      <h2>Filme: {item.titulo}</h2>
                      <div>
                        <Image src={item.imagem} width={150} height={250} />
                      </div>
                      <div></div>
                      <div>Descrição: {item.descricao}</div>
                    </div>
                  </List.Item>
                )}
              />
            ) : (
              <Empty description={<span>Sem nenhum filme encontrado</span>} />
            )}
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

export default ModalFilme;
