'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { FaSearch } from "react-icons/fa";
import Loading from './Loading';
 
export default function SearchBar() {
    const searchParams = useSearchParams(); 
    const router = useRouter(); 
    
    function handleSearch (term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
          } else {
            params.delete('q');
        }
        router.replace(`/search?${params.toString()}`);
        if (term === '') {
            router.replace("/");
        }
        console.log(term);
    };
    
    function handleKeyDown(event: any) {
        const params = new URLSearchParams(searchParams);
        if (event.key === 'Enter') {
          router.push(`/search?${params}`);
        }
    };    
    function onClickSearch(event: any) {
        const params = new URLSearchParams(searchParams);
        router.push(`/search?${params}`);
    };  

    return (
        <Suspense fallback={<Loading />}>
            <div className='flex space-x-2'>
                <input 
                    type="text " 
                    placeholder="Search" 
                    className=" bg-white rounded-lg input-bordered w-10/12 border-2 border-black p-2" 
                    onChange={(e) => {handleSearch(e.target.value);}} 
                    onKeyDown={handleKeyDown}
                    defaultValue={searchParams.get('query')?.toString()}
                >
                </input>  
                <button className="flex items-center justify-center btn-square rounded-lg border-black border-2" 
                        onClick={(e) => onClickSearch}>
                    <FaSearch />
                </ button>
            </div>
        </Suspense>
    );
}