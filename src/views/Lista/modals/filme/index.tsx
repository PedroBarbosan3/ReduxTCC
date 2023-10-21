import { Button, Col, Form, List, Row, Space, Image } from "antd";
import { useDispatch } from "react-redux";
import { ListagemState } from "../../../../redux/reducers/listagemReducer";
import { useTypedSelector } from "../../../../redux/store/store";
import { useEffect, useState } from "react";
import { getBuscarFilme } from "../../../../services/listagemService";
import { FilmesModel } from "../../../../models/classico/filmesModel";

export const ModalFilme = () => {
  //hooks
  const dispatch = useDispatch();

  //estados locais
  const [form] = Form.useForm();
  const [filme, setFilme] = useState<FilmesModel>({
    id: "",
    titulo: "",
    imagem: "",
    descricao: "",
    categoria: "",
  });

  // useEffect(() => {}, [dispatch, listagemState]);

  const submit = () => {};
  const procurarFilme = async () => {
    const retorno = await getBuscarFilme("blade");
    let filmeEcontrado: FilmesModel = {
      id: retorno.Title,
      titulo: retorno.Title,
      imagem: retorno.Poster,
      descricao: retorno.Plot,
      categoria: "",
    };
    setFilme(filmeEcontrado);
  };
  return (
    <Space direction="horizontal" size="middle" style={{ display: "flex" }}>
      <Button onClick={procurarFilme}></Button>
      <List
        itemLayout="horizontal"
        dataSource={[filme]}
        renderItem={(item, index) => (
          <List.Item>
            <div style={{ display: "flex", flexDirection:"column", justifyContent: "center" }}>
            <h1>{item.titulo}</h1>
              <div>
              <Image src={item.imagem} width={150} height={250}/>
              </div>
              <div>
              </div>
              <div>
              {item.descricao}
              </div>
            </div>
          </List.Item>
        )}
      />
      {/* <Form form={form} layout="vertical" onFinish={submit}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form.Item label="Nome do filme"></Form.Item>
          </Col>
        </Row>
      </Form> */}
    </Space>
  );
};

export default ModalFilme;
