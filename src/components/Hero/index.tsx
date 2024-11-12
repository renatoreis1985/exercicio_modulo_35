import { HeroContainer, Slogan, Branding } from './styles'

import logo from '../../assets/logo.png'

const Hero = () => (
  <HeroContainer>
    <Branding src={logo} alt="Logo do efood" />
    <Slogan>Gente que ama comer é nosso tipo de pessoa preferido!</Slogan>
  </HeroContainer>
)
export default Hero
