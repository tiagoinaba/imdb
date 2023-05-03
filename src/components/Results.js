import React from 'react'

export default function Results({ results }) {

    return (
        <div className='select-text'>
            {results.map(result => (
                <div key={result.id}>
                    {result.original_title}
                </div>
            ))}
        </div>
    )
}
