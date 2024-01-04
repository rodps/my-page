import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <nav className='fixed bg-slate-800 w-full h-10 top-0 flex justify-between items-center text-white text-sm px-5 gap-3'>
        <div>Rodrigo Paula da Silva | Software Engineer | Full Stack Developer</div>
        <div><a href="#">BR</a> | <a href="#">EN</a></div>
      </nav>
      <div className='text-gray-800 m-10'>
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

        <div className='max-w-xl m-auto mb-10'>
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

        <div className='max-w-xl m-auto mb-10'>
          <h2 className='text-xl font-extrabold mb-2'>Experiência</h2>
          <div>
            <div className='mb-3'>
              <p className='font-bold italic'>Desenvolvedor Web Full Stack</p>
              <p className='italic'>Digital One | 2022 - 2023</p>
            </div>

            <p>Atuou como desenvolvedor em Sistema de Atendimento (Chatbot).</p>
            <ul className='list-disc pl-10 mb-3'>
              <li>Correção de bugs</li>
              <li>Implementação de novas funcionalidades (Node.JS, React)</li>
            </ul>

            <p>Atuou como desenvolvedor em Sistema ERP.</p>
            <ul className='list-disc pl-10 mb-3'>
              <li>Implementação de novo layout para loja virtual (HTML, CSS, JS)</li>
              <li>Implementação de novas funcionalidades (PHP, Laravel)</li>
              <li>Integração com métodos de pagamento (Mercado Pago)</li>
              <li>Integração com serviços de frete (Correios)</li>
            </ul>

            <p>Responsável pelo desenvolvimento Full Stack de um sistema para assinatura eletrônica.</p>
            <ul className='list-disc pl-10 mb-3'>
              <li>API REST utilizando NestJS</li>
              <li>Front-End utilizando React, Typescript</li>
              <li>Importação de arquivos PDF</li>
              <li>Posicionamento de assinaturas</li>
              <li>Cadastro e autenticação de usuários</li>
              <li>Envio de Email</li>
              <li>Utilização de metodologias ágeis para para gerenciar o projeto.</li>
            </ul>

            <p>Responsável pelo desenvolvimento Front-End de uma aplicação para clínica odontológica utilizando React e Typescript.</p>
            <ul className='list-disc pl-10 mb-3'>
              <li>Cadastro e Autenticação de usuários</li>
              <li>Cadastro de procedimentos</li>
              <li>Upload de imagens</li>
              <li>Entre outras funcionalidades</li>
            </ul>                      
          </div>

          <div>
            <div className='mb-3'>
              <p className='font-bold italic'>Estágio em Desenvolvimento Web</p>
              <p className='italic'>Digital One | 2021</p>
            </div>
            <p>Desenvolvimento e manutenção de sites institucionais e blogs, utilizando PHP, CodeIgniter e MySQL.</p>
          </div>
        </div>

        <div className='max-w-xl m-auto mb-10'>
          <h2 className='text-xl font-extrabold mb-2'>Conhecimentos</h2>
          <div className='flex gap-20 italic'>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>NestJS</li>
              <li>React</li>
              <li>Typescript</li>
            </ul>
            <ul>
              <li>Jest</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>Docker</li>
            </ul>
            <ul>
              <li>Git</li>
              <li>AWS</li>
              <li>Spring Boot</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className='w-100 bg-slate-800 text-white py-10'>
        <div className='max-w-xl m-auto'>
          <h2 className='text-xl font-extrabold'>Contato</h2>
          <ul>
            <li>Email: rodrigops.dev@gmail.com</li>
          </ul>
        </div>
      </footer>
    </main>
  )
}
