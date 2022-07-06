import React from 'react';
import {Link} from 'react-router-dom';
import AppLogo from '../assets/icons/main_logo.png';
import logo from './../logo.svg';
import Animation from './../Animation.css';
/**
 * The home page
 * @returns 
 */
const Home = ()=>{
    return (
        <div className="w-full h-screen bg-gradient-to-r from-baby-blue/10 
        to-azure/10 grid content-center justify-items-center">

            {/* <img className="sm:w-1/6 w-1/2 m-3" src={AppLogo} alt="main_logo" /> */}
            <center>
                <img src={logo} className="App-logo" style={{width: 250, height: 250}} alt="logo" />
            </center>

            <p className="w-4/5 m-3 font-bold text-3xl text-center">
                ReactJs Survey App
            </p>

            <p className="w-4/5 m-2 font-bold text-2xl text-center">
                This is a survey web app using ReactJs
            </p>

            <p className="w-4/5 m-2 font-medium text-lg text-center">
                Let's get started!
            </p>

            <div className='inline-flex flex-col sm:flex-row items-center'>
                <Link 
                    className="bg-baby-blue px-10 pt-3 pb-4 rounded-2xl m-5
                        hover:bg-azure transition-all font-bold text-xl text-white 
                        shadow-lg shadow-baby-blue/50 hover:shadow-azure/40" 
                    to="/surveys">
                    Browse surveys
                </Link>

                <Link 
                    className="bg-baby-blue px-10 pt-3 pb-4 rounded-2xl m-5
                        hover:bg-azure transition-all font-bold text-xl text-white 
                        shadow-lg shadow-baby-blue/50 hover:shadow-azure/40"
                    to="/newsurvey">
                    Create a survey
                </Link>
            </div>
        </div>
    );
}

export default Home;