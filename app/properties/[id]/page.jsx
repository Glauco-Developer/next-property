'use client';
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname
} from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  
  const searchParams = useSearchParams();  
  const name = searchParams.get('name');
  
  const pathname = usePathname();

  return (
    <div>
      <button onClick={ () => router.push('/')} className='bg-blue-500 p-3'>Go to home</button>
      <ul>
        <li>Param = {id}</li>
        <li>Query Param = {name}</li>
        <li>Pathname = {pathname}</li>
      </ul>
    </div>
  )
}

export default PropertyPage