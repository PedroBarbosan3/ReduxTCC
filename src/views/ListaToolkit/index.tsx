import { Avatar, Collapse, List } from "antd";

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

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

const ListaToolkit = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <div className="box">
        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
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
      </div>
    </>
  );
};

export default ListaToolkit;
