import { Link } from 'react-router-dom'

interface DefaultLayoutOptions{
    children: React.ReactNode
}

const DefaultLayout = ({children}:DefaultLayoutOptions) => {
  return (
    <>
        <header>
            <nav>
                <ul className='nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Signup'>Singup</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>
  )
}

export default DefaultLayout