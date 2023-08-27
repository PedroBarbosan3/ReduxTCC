import "./style/siderMenu.scss";
import { Menu, MenuProps } from "antd";
import { BorderOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SiderMenu = () => {
  let navigate = useNavigate();
  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("view 1", "1", <BorderOutlined />),
    getItem("view 2", "2", <BorderOutlined />),
  ];

  //Ao criar uma nova rota no menu, adicionar a esse arry a posicição correspondente a key
  const navegarMenu = (value: number) =>{
    const rotas = [
      "/base",
      "/baseSecond"
    ]
    navigate(rotas[value - 1]);
  }

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      items={items}
      style={{
        color: "white",
        minHeight: "88vh",
        backgroundColor: "#491bdf",
        borderRight: "0 solid",
      }}
      onSelect={(item) => navegarMenu(parseInt(item.key))}
    />
  );
};

export default SiderMenu;
