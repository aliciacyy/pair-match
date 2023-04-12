import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./components/Card";
import React, { useState } from "react";

function App() {
  const [showBlank, setShowBlank] = useState(false);
  const [isDisableClick, setIsDisableClick] = useState(false);

  const [trigger651, setResetTrigger651] = useState(0);
  const [trigger652, setResetTrigger652] = useState(0);
  const [trigger661, setResetTrigger661] = useState(0);
  const [trigger662, setResetTrigger662] = useState(0);
  const [trigger671, setResetTrigger671] = useState(0);
  const [trigger672, setResetTrigger672] = useState(0);
  const [trigger681, setResetTrigger681] = useState(0);
  const [trigger682, setResetTrigger682] = useState(0);
  const [trigger691, setResetTrigger691] = useState(0);
  const [trigger692, setResetTrigger692] = useState(0);
  const [trigger701, setResetTrigger701] = useState(0);
  const [trigger702, setResetTrigger702] = useState(0);

  const [found65, setFound65] = useState(false);
  const [found66, setFound66] = useState(false);
  const [found67, setFound67] = useState(false);
  const [found68, setFound68] = useState(false);
  const [found69, setFound69] = useState(false);
  const [found70, setFound70] = useState(false);

  // let [found65, found66, found67, found68, found69, found70] = [
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ];
  let cardsShown = [];
  let foundCount = 0;

  // setTimeout(() => {
  //   setShowBlank(true);
  // }, 20000);

  const onCardClick = (event) => {
    let isFound = false;
    switch (event) {
      case '65': {
        isFound = found65;
        break;
      }
      case '66': {
        isFound = found66;
        break;
      }
      case '67': {
        isFound = found67;
        break;
      }
      case '68': {
        isFound = found68;
        break;
      }
      case '69': {
        isFound = found69;
        break;
      }
      case '70': {
        isFound = found70;
        break;
      }
    }

    if (cardsShown.indexOf(event) < 0 && !isFound) {
      cardsShown.push(event);
    }
    if (cardsShown.length === 2) {
      setIsDisableClick(true);
      // if both match
      if (cardsShown[0].substring(0,2) === cardsShown[1].substring(0,2)) {
        switch (cardsShown[0].substring(0,2)) {
          case '65': {
            if (found66 && found67 && found68 && found69 && found70) {
              setShowBlank(true);
            }
            setFound65(true);
            break;
          }
          case '66': {
            setFound66(true);
            if (found65 && found67 && found68 && found69 && found70) {
              setShowBlank(true);
            }
            break;
          }
          case '67': {
            if (found65 && found66 && found68 && found69 && found70) {
              setShowBlank(true);
            }
            setFound67(true);
            break;
          }
          case '68': {
            if (found65 && found66 && found67 && found69 && found70) {
              setShowBlank(true);
            }
            setFound68(true);
            break;
          }
          case '69': {
            if (found65 && found66 && found67 && found68 && found70) {
              setShowBlank(true);
            }
            setFound69(true);
            break;
          }
          case '70': {
            if (found65 && found66 && found67 && found68 && found69) {
              setShowBlank(true);
            }
            setFound70(true);
            break;
          }
        }
        cardsShown = [];
        setIsDisableClick(false);
      } else {
        // else clear
        setTimeout(() => {
          for (let id of cardsShown) {
            switch (id) {
              case '65-1': {
                setResetTrigger651((prev) => prev+1);
                break;
              }
              case '65-2': {
                setResetTrigger652((prev) => prev+1);
                break;
              }
              case '66-1': {
                setResetTrigger661((prev) => prev+1);
                break;
              }
              case '66-2': {
                setResetTrigger662((prev) => prev+1);
                break;
              }
              case '67-1': {
                setResetTrigger671((prev) => prev+1);
                break;
              }
              case '67-2': {
                setResetTrigger672((prev) => prev+1);
                break;
              }
              case '68-1': {
                setResetTrigger681((prev) => prev+1);
                break;
              }
              case '68-2': {
                setResetTrigger682((prev) => prev+1);
                break;
              }
              case '69-1': {
                setResetTrigger691((prev) => prev+1);
                break;
              }
              case '69-2': {
                setResetTrigger692((prev) => prev+1);
                break;
              }
              case '70-1': {
                setResetTrigger701((prev) => prev+1);
                break;
              }
              case '70-2': {
                setResetTrigger702((prev) => prev+1);
                break;
              }
            }
          }
          cardsShown = [];
          setIsDisableClick(false);
        }, 1000);
      }
    }
  }

  return (
    <div className="App">
      <div className={!showBlank ? "hidden" : ""}>
        <Container fluid className="main-container">
          <Row>
            <h2>QUIZ TIME</h2>
          </Row>
        </Container>
      </div>
      <div className={showBlank ? "hidden" : ""}>
        <Container fluid className="main-container">
          <Row>
            <h2>Find all matching pairs</h2>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="6">
              <div className="card-grid">
                <Card trigger={trigger651} cardId="65-1" img="./images/2106265.jpg" disableClick={isDisableClick} found={found65} clickEvent={onCardClick}/>
                <Card trigger={trigger671} cardId="67-1" img="./images/2106267.jpg" disableClick={isDisableClick} found={found67} clickEvent={onCardClick}/>
                <Card trigger={trigger652} cardId="65-2" img="./images/2106265.jpg" disableClick={isDisableClick} found={found65} clickEvent={onCardClick}/>
                <Card trigger={trigger701} cardId="70-1" img="./images/2106270.jpg" disableClick={isDisableClick} found={found70} clickEvent={onCardClick}/>
                <Card trigger={trigger702} cardId="70-2" img="./images/2106270.jpg" disableClick={isDisableClick} found={found70} clickEvent={onCardClick}/>
                <Card trigger={trigger681} cardId="68-1" img="./images/2106268.jpg" disableClick={isDisableClick} found={found68} clickEvent={onCardClick}/>
                <Card trigger={trigger661} cardId="66-1" img="./images/2106266.jpg" disableClick={isDisableClick} found={found66} clickEvent={onCardClick}/>
                <Card trigger={trigger672} cardId="67-2" img="./images/2106267.jpg" disableClick={isDisableClick} found={found67} clickEvent={onCardClick}/>
                <Card trigger={trigger691} cardId="69-1" img="./images/2106269.jpg" disableClick={isDisableClick} found={found69} clickEvent={onCardClick}/>
                <Card trigger={trigger682} cardId="68-2" img="./images/2106268.jpg" disableClick={isDisableClick} found={found68} clickEvent={onCardClick}/>
                <Card trigger={trigger662} cardId="66-2" img="./images/2106266.jpg" disableClick={isDisableClick} found={found66} clickEvent={onCardClick}/>
                <Card trigger={trigger692} cardId="69-2" img="./images/2106269.jpg" disableClick={isDisableClick} found={found69} clickEvent={onCardClick}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
