import React from 'react'
import CardList from '@/components/cardList/CardList'
import Category from '@/components/category/Category'
import Menu from '@/components/menu/Menu'
import Link from 'next/link'

export default function page() {
  return (
    <main id='main'>
      <section className="main__header">
        <h2>Make A NEW WORLD</h2>
      </section>
      <section className='main__contents'>
        <div className='main__contheader'>
          <h3>MAIN</h3>
          <Category />
        </div>
        <CardList />
      </section>
      <section className='main__middle'>
        <ul>
          <Link href='/' className='left'><p>React</p></Link>
          <Link href='/' className='middle'><p>Node.js</p></Link>
          <Link href='/' className='right'><p>Life</p></Link>
        </ul>
      </section>
      <section className='main__footer'>
        <ul>
          <Link href='/' className='top'></Link>
          <Link href='/' className='middle'></Link>
          <Link href='/' className='bottom'></Link>
        </ul>
      </section>
    </main>
  )
}
