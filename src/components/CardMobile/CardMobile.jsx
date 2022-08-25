import { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { ArrowUpCircle, ArrowDownCircle, CurrencyDollar } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CardMobile.css";
import data from "../../services/data";
import GlobalContext from "../../context/GlobalContext";

function CardMobile(props) {
  const globalCtx = useContext(GlobalContext);
  const [expen, setExpen] = useState(0.0);
  const [value, setValue] = useState(0.0);

  useEffect(() => {
    data.get("count").then(function (response) {
      const aux = response.data;
      const baux = aux.filter((user) => user.idUser == globalCtx.idUser);
      setExpen(baux[0].countExpense);
      setValue(baux[0].countValue);
    });
  }, [globalCtx, props.switch]);

  function handleClass() {
    if (value - expen < 0) {
      return "card red-card";
    } else {
      return "card green-card";
    }
  }
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="summary">
      <Swiper className="mySwiper">
        <SwiperSlide className="card-slide">
          <Card className="card white-card">
            <Card.Body>
              <div className="div-card-title">
                <Card.Title className="card-title">Entradas</Card.Title>
                <ArrowUpCircle className="icon-card arrow-up" />
              </div>
              <Card.Text className="card-text">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)}

                <span className='span-white'>Última entrada dia { }</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card className="card white-card">
            <Card.Body>
              <div className="div-card-title">
                <Card.Title className="card-title">Saídas</Card.Title>
                <ArrowDownCircle className="icon-card arrow-down" />
              </div>
              <Card.Text className="card-text">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(expen)}

                <p><span className='span-white'>Última entrada dia { }</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card className={handleClass}>
            <Card.Body>
              <div className="div-card-title">
                <Card.Title className="card-title">Total</Card.Title>
                <CurrencyDollar className="icon-card" />
              </div>
              <Card.Text className="card-text">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value - expen)}
                <p><span className='span-green'>Última entrada dia { }</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CardMobile;
