
import faixa from '../../images/faixa_colorida.png'
import logoBosch from '../../images/Bosch-logo.svg.png'
import logoPrin from '../../images/logo_principal.png'
import { RiHome5Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";


export function Header() {
  return (
    <div className='flex flex-col shadow-custom'>
      <img src={faixa} className='w-full' />
      <div className='flex justify-between my-4 items-center px-5 '>

        <img src={logoPrin}/>

        <h1 className='font-semibold text-xl'>BREAKDOWN</h1>

        <div className='flex justify-between items-center gap-5'>
        
          <RiHome5Line size={30} />
          <BsPerson size={30} />

          <img src={logoBosch} width={100} />
          
        </div>
      </div>
    </div>
  )
}