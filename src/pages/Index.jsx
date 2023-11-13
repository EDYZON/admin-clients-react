import {useLoaderData} from 'react-router-dom'
import Cliente from '../components/Cliente';

export function loader(){
  const clientes = [
    {
      id:1,
      nombre:"Juan",
      telefono:"0000000",
      email:"juan@juan.com",
      empresa:"izzy"
    },
    {
      id:2,
      nombre:"Jose",
      telefono:"7772721521",
      email:"jose@izzi.mx",
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
      <p className='mt-3'> Administra tus clientes </p>
      {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead>
            <tr>
              <th className='p-2'>Clientes</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
            </thead> 
            <tbody>
            {clientes.map(cliente =>(
                 <Cliente 
                   cliente = {cliente}
                   key = {cliente.id}
                 />
              ))}

            </tbody>
        </table>
      ):(
        <p>No hay clientes aun</p>
      )}
    </>
  )
}

export default Index