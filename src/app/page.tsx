import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex items-center flex-col text-gray-800'>
        <Image src={"/profile.jpeg"} alt='Foto de perfil' width={200} height={200} className='rounded-full m-5' />
        <h1 className='text-3xl font-extrabold mb-2'>Rodrigo Paula da Silva</h1>
        <p>Desenvolvedor Full Stack, Bacharel em Ciência da Computação - UTFPR</p>
        <p>26 anos, Cianorte - PR</p>

        <div className='flex gap-3 mt-3'>
          <a href="https://www.linkedin.com/in/rodrigopsdev" className='link'>
            <FontAwesomeIcon icon={faLinkedin} width={18} />
          </a>
          <a href="https://www.github.com/rodps" className='link'>
            <FontAwesomeIcon icon={faGithub} width={18} />
          </a>
        </div>

        <p className='my-20'>Em construção...</p>
      </div>
    </main>
  )
}
