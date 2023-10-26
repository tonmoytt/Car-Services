import { useEffect, useState } from "react";

 

const TOGGLE = () => {
    const [dark ,setDark] = useState(null)
    
    useEffect(() =>{
        if(window.matchMedia('(prefers-color-scheme : dark)').matches){
            setDark('dark');
        }
        else{
            setDark('light');
        }
    },[])
 
    useEffect(()=>{
        if(dark ==="dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark"); 
        }
    },[dark])

    const hendelDark= () =>{
        setDark(dark === "dark" ? "light" : "dark");
    }

    return (
        <div className="text-center dark:bg-black">
           <button onClick={hendelDark} className="text-4xl font-serif font-bold text-red-600 text-center mt-4">Click on Dark mood</button>
        </div>
    );
};

export default TOGGLE;