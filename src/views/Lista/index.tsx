import { Button, Col, Collapse, List, Modal, Row, Space, Image, Empty } from "antd";
import { useDispatch } from "react-redux";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import { useTypedSelector } from "../../redux/store/store";
import { ListagemState } from "../../redux/reducers/listagemReducer";
import ModalCategoria from "./modals/categoria";
import ModalFilme from "./modals/filme";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const ListaClassica = () => {
  //estados globais
  const listagemState: ListagemState = useTypedSelector((state) => state.listagem);

  //hooks
  const dispatch = useDispatch();

  //estados locais

  const removerCategoria = (idCategoria: string) => {
    dispatch({ type: "REMOVER_CATEGORIA", payload: idCategoria });
  };

  const goModalCategoria = () => {
    dispatch({ type: "SET_MODAL_CATEGORIA", payload: true });
  };
  const goModalFilme = () => {
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
          <Button icon={<PlusCircleOutlined rev={undefined} />} onClick={goModalCategoria}>
            Adicionar Categoria
          </Button>
        </Col>
        <Col span={16}></Col>
        <Col span={4} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button icon={<PlusCircleOutlined rev={undefined} />} onClick={goModalFilme}>
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
                    dataSource={listagemState.filmes}
                    renderItem={(item, index) => {
                      return item.categoria === categoria.id ? (
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
                      ) : (
                        <Empty description={<span>Sem nenhum filme encontrado</span>} />
                      );
                    }}
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
