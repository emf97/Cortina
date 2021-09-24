import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { Container } from "./styles";

export default function Index() {
  const [state, setState] = useState();
  const [data, setData] = useState([]);
  const [resp, seResp] = useState(false);

  useEffect(() => {
    async function fecthData() {
      await axios
        .get(
          "https://cortina-automatizada-default-rtdb.firebaseio.com/janela.json"
        )
        .then((response) => {
          console.log(response.data);
          setState(response.data.estado);
        });

      await axios
        .get(`https://cortina-automatizada-default-rtdb.firebaseio.com//horarioLog.json?orderBy="$key"&limitToLast=4`)
        .then((response) => {
          setData(
            Object.keys(response.data)
              .reverse()
              .map((key) => {
                return response.data[key];
              })
          );
        });  
    }
    fecthData();
  }, [resp]);

  function checkState() {
    console.log(state);
    if (state) {
      openWindow();
    } else {
      closeWindow();
    }
  }

  async function openWindow() {
    await axios
      .patch(
        "https://cortina-automatizada-default-rtdb.firebaseio.com/janela.json",
        { estado: !state }
      )
      .then(function (response) {
        console.log(response);
        seResp(!resp);
      })
      .catch(function (error) {
        console.log(error);
      });
    return;
  }

  async function closeWindow() {
    await axios
      .patch(
        "https://cortina-automatizada-default-rtdb.firebaseio.com/janela.json",
        { estado: !state }
      )
      .then(function (response) {
        seResp(!resp);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return;
  }

  return (
    <>
      <Helmet>
        <title>Cortina Automatizada</title>
        <meta name="description" content="" />
      </Helmet>
      <Container>
        <div className={!!state ? "janela-esquerda" : "janela-esquerda-open"} />
        <div className={!!state ? "janela-direita" : "janela-direita-open"} />
        <div className="bg" />
        <button onClick={() => checkState()}>
          {!!state ? "Fechar" : "Abrir"}
        </button>
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {!!data &&
              data.map((dataAux) => (
                <tr>
                  {format(new Date(dataAux.horario), "dd/MM/yyyy - HH:mm")}
                </tr>
              ))}
          </tbody>
        </table>
        </div>
      </Container>
    </>
  );
}
