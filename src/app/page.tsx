import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='text-gray-800'>
        <div className='flex items-center flex-col mb-10'>
          <Image src={"/profile.jpeg"} alt='Foto de perfil' width={200} height={200} className='rounded-full my-3' />
          <h1 className='text-3xl font-extrabold mb-2'>Rodrigo Paula da Silva</h1>
          <p>Desenvolvedor Full Stack, Bacharel em Ciência da Computação - UTFPR</p>
          <p>26 anos, Cianorte - PR</p>
          <div className='flex gap-3 mt-3 items-center'>
            <a href="https://www.linkedin.com/in/rodrigopsdev" className='link'>
              <FontAwesomeIcon icon={faLinkedin} width={18} />
            </a>
            <a href="https://www.github.com/rodps" className='link'>
              <FontAwesomeIcon icon={faGithub} width={18} />
            </a>
            <a href="mailto:rodrigops.dev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} width={18} className='link' />
            </a>
          </div>
        </div>

        <div className='max-w-xl m-auto mb-5'>
          <h2 className='text-xl font-extrabold mb-2'>Sobre mim</h2>
          <p className='text-justify mb-5'>
            Possuo experiência no mercado de trabalho desde o final de 2021 quando comecei meu estágio como desenvolvedor, trabalhando com PHP. 
            No entanto, comecei a escrever minhas primeiras aplicações para Web em meados de 2018 utilizando Node.js. 
            Tenho utilizado Node.js e React desde então, tanto no trabalho como em projetos pessoais.
            Em 2015, eu começava meu curso de graduação em Ciência da Computação, onde pude aprofundar meus conhecimentos em algoritmos, 
            estrutura de dados, orientação a objetos, redes, sistemas distribuídos, compiladores, segurança e tantas outras disciplinas que 
            aumentaram minha bagagem como desenvolvedor. 
            Apesar de todas as dificuldades e problemas durante o percurso, consegui concluir meu curso em Junho de 2023.
            Recentemente fui aprovado no exame de certificação da AWS. Tenho me interessado também por NextJs, Docker, Kubernetes e DevOps.
            Meus hobbies são ouvir música e assitir futebol.
          </p>
        </div>
      </div>
    </main>
  )
}
