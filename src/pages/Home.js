import { Fade } from 'react-awesome-reveal'
import CardContainer from '../components/cards/CardContainer'
import Carrousel from '../components/carrousel/Carrousel'

const Home = () => {
  return (
    <Fade>
      <Carrousel />
      <CardContainer /> 
    </Fade>
  )
}

export default Home
