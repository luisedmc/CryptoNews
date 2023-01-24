import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='mt-3'>Web News</h1>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-2'>
                    <nav className='list-group'>
                        <Link to='/' className='list-group-item list-group-item-action'>Home</Link>
                        <Link to='/articles' className='list-group-item list-group-item-action'>Articles</Link>
                        <Link to='/about' className='list-group-item list-group-item-action'>About</Link>
                    </nav>
                </div>

                <div className='col-md-10'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;