import React, {useEffect, useState} from 'react';
import API from "../API/API";
import Loader from "../components/UI/Loader/Loader";
import Cards from "../components/Cards";

const Home = () => {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [errorLog, setErrorLog] = useState('')
  const [load, setLoad] = useState(true)
  useEffect(() => {
    API.get('/cards.json').then((resp) => {
      if (resp.data) {
        API.get(`/cards/${Object.keys(resp.data)[0]}.json`).then((resp) => {
          setCards(resp.data)
          setLoad(false)
        }).catch((er) => {
          setErrorLog(er)
          setError(true)
        })
      } else {
        setErrorLog('Данных не обнаружено')
        setError(true)
        setLoad(false)
      }
    }).catch((er) => {
      setErrorLog(er)
      setError(true)
      setLoad(false)
    })
  }, [])

  return (
    <div>
      {load
        && <Loader />
      }
      {error
        ? <h1 style={{textAlign: 'center'}}>{errorLog}</h1>
        : <Cards cards={cards} />
      }
    </div>
  );
};

export default Home;