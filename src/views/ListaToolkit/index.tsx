import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Empty, List, Modal, Row, Space, Image } from "antd";
import { useAppDispatch, useAppSelector } from "../../util/hooks";
import { removerCategoria, setModalCategoria, setModalFilme } from "../../reduxToolkit/Lista/listagemSlice";
import { CategoriasModel } from "../../models/classico/categoriasModel";
import ModalCategoriaToolkit from "./categoria";
import ModalFilmeToolkit from "./filme";

const { Panel } = Collapse;

const ListaToolkit = () => {
  //estados globais
  const listagemState = useAppSelector((state) => state.listagem);

  //hooks
  const dispatch = useAppDispatch();

  //estados locais

  const removeCategoria = (idCategoria: string) => {
    dispatch(removerCategoria(idCategoria));
  };

  const goModalCategoria = () => {
    dispatch(setModalCategoria(true));
  };

  const goModalFilme = () => {
    dispatch(setModalFilme(true));
  };

  const closeModalCategoria = () => {
    dispatch(setModalCategoria(false));
  };

  const closeModalFilme = () => {
    dispatch(setModalFilme(false));
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
                      <DeleteOutlined rev={undefined} onClick={() => removeCategoria(categoria.id)} />
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
        <ModalCategoriaToolkit />
      </Modal>
      <Modal title={"Adicionar filme"} centered width={1100} open={listagemState.modalFilme} onCancel={closeModalFilme} footer={null}>
        <ModalFilmeToolkit />
      </Modal>
    </Space>
  );
};

export default ListaToolkit;
