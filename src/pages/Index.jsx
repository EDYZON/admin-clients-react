import {useLoaderData} from 'react-router-dom'

export function loader(){
  const clientes = [
    {
      id:1,
      nombre:"Juan",
      telefono:"0000000",
      email:"juan@juan.com",
      empresa:"izzy"
    }
  ];
  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();
  console.log(clientes)
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>
         Administra tus clientes
      </p>
    </>
  )
}

export default Index