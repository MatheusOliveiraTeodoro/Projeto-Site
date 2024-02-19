import React, { useState, useRef, useEffect, useContext } from 'react'
import './Home.css'
import Video1 from "./videos/site 1.mp4"
import fundo from "./videos/desenvolvimento-web.jpg"
import { SlSocialInstagram } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Navbar from './Components/Navbar';
import landCard from "./videos/foto1.jfif"
//função de estado do video 


function usePlayerState ($videoPlayer) {
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
    });

    useEffect(() => {
        playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();
    },  [
        $videoPlayer,
        playerState.playing,
    ]);


        
    function toggleVideoPlay()  {
        setPlayerState({
            ...playerState,
            playing: !playerState.playing, 
        })
    } 

    function handleTimeUpdate() {
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) *  100;
        setPlayerState({
            ...playerState,
            percentage: currentPercentage,
        })
    }

    function handleChangeVideoPercentage(eventInfos) {
        const currentPercentageValue = event.target.value;
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue;-

        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })
    }

    return {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    }
}

const openModal = document.querySelector("open-modal");
const closeModal = document.querySelector("close-modal");
 


const Home = () => {
   
    const $videoPlayer = useRef(null);
    const {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
      } = usePlayerState($videoPlayer);

    return(
       <>  

       <div className="w-full h-12 bg-red-800 Logo ">
            <Navbar />
       </div>

  <div className=" w-full h-full fixed bg-cover bg-no-repeat imagem ">
        
        <div className="w-96 h-72 bg-amber-200 rounded-lg shadow-md overflow-hidden mx-14 my-24 ml-11 ">
            <div className="px-5 py-4"> 
                <div className="font-bold text-xl mb-2 text-center block">Contatos</div>

        <h1 className="flex "><SlSocialInstagram className="size-6 "/>matheus_kuky</h1>
        <h1 className="flex"><MdEmail className="size-6"/>matheusteodoro1207@gmail.com</h1>
        <h1 className="flex"><FaPhoneAlt className="size-6"/>(19) 992464906</h1>
        <h1 className="flex"><FaGithub className="size-6"/>MatheusOliveiraTeodoro</h1>
        <h1 className="flex"><FaSpotify className="size-6"/>Assistidores de filmes</h1>
        <h2 className="flex "><FaLinkedin className="size-6" />https://www.linkedin.com/in/matheus-oliveira-a127a21a3/</h2>

            </div>
        </div>
        
      {/*card modal video */}
        
        <div className="controls w-96 h-fit relative border-solid flex py-5 ml-5 ">
        
            
            <div id="modal" className="bg-white rounded-md overflow-hidden shadow-md ">
               
                <button  id="close-modal" className="flex pointer-events-none"> <IoCloseCircle /> </button>
                <video 
                ref={$videoPlayer}
                src={Video1} 
                onTimeUpdate={handleTimeUpdate}
                /> 
            <div className="m-4 font-semibold text-sm font-serif text-red-700 text-center space-x-0.5 ">
                <button onClick={toggleVideoPlay} className=""> 
                        { playerState.playing ? "Pause" : "Play" }
                </button>
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            onChange={handleChangeVideoPercentage}
                            value={playerState.percentage}
                /> 
                <select className="bg-white">
                    {[1,2,3].map(speed =>   (
                        <option 
                            key={`speedChange_${speed}`}
                        > 
                                {speed}
                        </option>
                ))}      
                </select>
                    <span className="block text-gray-500 text-sm ">Introdução</span>
                </div>

                <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 bg-slate-200">
                    <span className="">15 Segundos</span>
                </div>    
                </div>
            
            </div>

             
    </div>

    {/* cards para abrir o modal video

    <div id="container" className="rounded-lg bg-black drop-shadow-sm w-48 h-80 mx-2 py-2">
                <img src={landCard} className="bg-contain bg-center w-48 h-52"/>
                    <button  className="bg-white w-16 h-12 static flex pt-0.5 mx-auto my-4">Abrir o video</button>
                <span className="text-white bg-neutral-800 w-20 h-12 ms-16 text-center ">Video 1</span>
        </div>
            
            

        <div className="rounded-lg bg-black drop-shadow-sm w-48 h-80 mx-72 py-2 absolute mx-auto my-">
                <img src={landCard} className="bg-contain bg-center w-48 h-52"/>
                    <button  id="open-modal" className="bg-white w-16 h-12 static flex pt-0.5 mx-auto my-4">Abrir o video</button>
                <span className="text-white bg-neutral-800 w-20 h-12 ms-16 text-center ">Video 2</span>
        </div>
            

        <div className="rounded-lg bg-black drop-shadow-sm w-48 h-80 mx-auto py-2">
                <img src={landCard} className="bg-contain bg-center w-48 h-52"/>
                    <button  className="bg-white w-16 h-12 static flex pt-0.5 mx-auto ">Abrir o video</button>
                <span className="text-white bg-neutral-800 w-20 h-12 ms-16 text-center ">Video 3</span>
        </div>
            

        <div className="rounded-lg bg-black drop-shadow-sm w-48 h-80 py-2 ">
                <img src={landCard} className="bg-contain bg-center w-48 h-52"/>
                    <button  className="bg-white w-16 h-12 static flex pt-0.5 mx-auto my-4">Abrir o video</button>
                <span className="text-white bg-neutral-800 w-20 h-12 ms-16 text-center ">Video 4</span>
        </div>
*/}

       </>
    );
};




export default Home;