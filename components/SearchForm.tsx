import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

// 원래라면 Client side 여였을텐데, Next 의 새로운 Form 형식으로 Server Side Search 가 가능해진다다

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input 
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder='Search Startups'
            />

            <div className="flex gap-2">
                {query && <SearchFormReset/>}

                <button type="submit" className="search-btn text-white">
                    <Search className="size-5"/>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm