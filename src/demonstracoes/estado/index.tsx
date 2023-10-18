import { useState } from "react";

const DemonstraçaoEstado = () => {
  const MudarTexto = () => {
    const [texto, setTexto] = useState("Texto inicial");

    const trocarTexto = () => {
      setTexto("Novo texto");
    };

    return (
      <>
        {texto}
        <button onClick={trocarTexto}></button>
      </>
    );
  };

  return (
    <>
      <MudarTexto />
    </>
  );
};

export default DemonstraçaoEstado;
