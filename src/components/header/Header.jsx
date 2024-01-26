import Link from 'next/link'
import React from 'react'
import Toggle from '../toggle/Toggle'
import Menu from '../menu/Menu'

export default function Header() {
    return (
        <header id='header'>
            <div className='header__inner'>
                <h1 className="header__logo">
                    <Link href="/">Back Jeong</Link>
                </h1>
                <div className='menu__wrap'>
                    <Menu />
                </div>
                <Toggle />
            </div>
        </header>
    )
}
