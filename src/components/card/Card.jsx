import Link from 'next/link'
import React from 'react'

export default function Card({ item }) {
    return (
        <div className="blog">
            <Link href={`blogDetail/${item.slug}`}>
                <div className='blogimg'>
                    <p className="desc">{item.desc}</p>
                </div>
                <div className='box'>
                    <div className='blogdesc'>
                        <h4 className="title">{item.title}</h4>
                    </div>
                    <div className="info">
                        <span className="view">{item.views}</span>
                        <span className="like">2</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
