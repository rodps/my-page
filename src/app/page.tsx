import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/dictionaries'

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const lang = searchParams.lang ?? "pt-br"
  const dict = await getDictionary(lang)
  return (
    <main>
      <div className='text-gray-800 m-5 mt-10'>
        <div className='max-w-xl m-auto mb-10'>
          <Link href="?lang=pt-br" scroll={false} className={`${lang === 'pt-br' ? 'font-bold' : 'hover:text-slate-500'}`}>Português (Brasil)</Link> | <Link href="?lang=en" scroll={false} className={`${lang === 'en' ? 'font-bold' : 'hover:text-slate-500'}`}>English</Link>
        </div>
        <div className='flex items-center text-center flex-col mb-10'>
          <Image src={"/profile.jpeg"} alt='Foto de perfil' width={200} height={200} className='rounded-full my-3' />
          <h1 className='text-2xl sm:text-3xl font-extrabold mb-2'>Rodrigo Paula da Silva</h1>
          <p>{dict.resumo.titulo}</p>
          <p>{dict.resumo.subtitulo}</p>
          <div className='flex gap-3 mt-3 items-center'>
            <a href="https://www.linkedin.com/in/rodrigopsdev" className='hover:text-slate-500'>
              <FontAwesomeIcon icon={faLinkedin} width={18} />
            </a>
            <a href="https://www.github.com/rodps" className='hover:text-slate-500'>
              <FontAwesomeIcon icon={faGithub} width={18} />
            </a>
            <a href="mailto:rodrigops.dev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} width={18} className='hover:text-slate-500' />
            </a>
          </div>
        </div>

        <div className='max-w-xl m-auto mb-10'>
          <h2 className='text-xl font-extrabold mb-2'>{dict.sobre.titulo}</h2>
          <p className='text-justify mb-5'>
            {dict.sobre.texto}
          </p>
        </div>

        <div className='max-w-xl m-auto mb-10'>
          <h2 className='text-xl font-extrabold mb-2'>{dict.experiencia.titulo}</h2>
          <ul>
            {dict.experiencia.empresas.map((empresa: any, idx: number) => (
              <li key={idx}>
                <div className='mb-3'>
                  <p className='font-bold italic'>{empresa.cargo}</p>
                  <p className='italic'>{empresa.empresa}</p>
                </div>
                <ul>
                  {Array.from(empresa.projetos).map((projeto: any, idx) => (
                    <li key={idx}>
                      <p>{projeto.descricao}</p>
                      <ul className='list-disc pl-10 mb-3'>
                        {projeto.pontos && Array.from(projeto.pontos).map((ponto, idx) => (
                          <li key={idx}>{ponto as string}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}             
          </ul>
        </div>

        <div className='max-w-xl m-auto mb-10'>
          <h2 className='text-xl font-extrabold mb-2'>{dict.conhecimento.titulo}</h2>
          <div className='flex gap-20 italic'>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>NestJS</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Jest</li>
              <li>AWS</li>
            </ul>
            <ul>
              <li>PHP</li>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Spring Boot</li>
            </ul>
          </div>
        </div>
        <div className='max-w-xl m-auto mb-20'>
          <p>{dict.contato.titulo}: rodrigops.dev@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
