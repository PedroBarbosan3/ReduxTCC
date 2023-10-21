import { Avatar, Button, Col, Collapse, List, Modal, Row, Space } from "antd";
import { useDispatch } from "react-redux";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import { useTypedSelector } from "../../redux/store/store";
import { ListagemState } from "../../redux/reducers/listagemReducer";
import ModalCategoria from "./modals/categoria";
import ModalFilme from "./modals/filme";
import { DeleteOutlined, PlayCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
];

const ListaClassica = () => {
  //estados globais
  const listagemState: ListagemState = useTypedSelector((state) => state.listagem);
  console.log("lista", listagemState);

  //hooks
  const dispatch = useDispatch();

  //estados locais

  const removerCategoria = (idCategoria: string) => {
    dispatch({ type: "REMOVER_CATEGORIA", payload: idCategoria });
  };

  const adicionarCategoria = () => {
    dispatch({ type: "SET_MODAL_CATEGORIA", payload: true });
  };
  const adicionarFilme = () => {
    dispatch({ type: "SET_MODAL_FILME", payload: true });
  };

  const closeModalCategoria = () => {
    dispatch({ type: "SET_MODAL_CATEGORIA", payload: false });
  };

  const closeModalFilme = () => {
    dispatch({ type: "SET_MODAL_FILME", payload: false });
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row gutter={[24, 24]}>
        <Col span={4}>
          <Button icon={<PlusCircleOutlined rev={undefined} />} onClick={adicionarCategoria}>
            Adicionar Categoria
          </Button>
        </Col>
        <Col span={16}></Col>
        <Col span={4} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button icon={<PlusCircleOutlined rev={undefined} />} onClick={adicionarFilme}>
            Adicionar filme
          </Button>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Collapse>
            {listagemState.categoria.map((categoria: CategoriasModel) => {
              return (
                <Panel
                  header={
                    <Space style={{ display: "flex", justifyContent: "space-between" }}>
                      {categoria.descricao}
                      <DeleteOutlined rev={undefined} onClick={() => removerCategoria(categoria.id)} />
                    </Space>
                  }
                  key={categoria.id}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                </Panel>
              );
            })}
          </Collapse>
        </Col>
      </Row>
      <Modal title={"Adicionar Categoria"} centered width={350} open={listagemState.modalCategoria} onCancel={closeModalCategoria} footer={null}>
        <ModalCategoria />
      </Modal>
      <Modal title={"Adicionar filme"} centered width={1100} open={listagemState.modalFilme} onCancel={closeModalFilme} footer={null}>
        <ModalFilme />
      </Modal>
    </Space>
  );
};

export default ListaClassica;
