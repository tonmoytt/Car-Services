import { useEffect, useState } from "react";
import AboutUsBG from "./Aboutus BG/AboutUsBG";
import Baneerrpic from "./Baneerr bg/Baneerrpic";
import CustomarsReview from "./CustomarsReview/CustomarsReview";
import Footer from "./Footer/Footer";
import MeetTeam from "./SErviceData/MeetTeam/MeetTeam";
import PopularProduct from "./SErviceData/PopularProduct/PopularProduct";
import SErviceData from "./SErviceData/SErviceData";
import SupporService from "./SErviceData/SupporService/SupporService";
import Moreservice from "./SErviceData/Moreservice/Moreservice";
 



const Home = () => {
    // const [dark ,setDark] = useState(null)


    // useEffect(() =>{
    //     if(window.matchMedia('(prefers-color-scheme : dark)').matches){
    //         setDark('dark');
    //     }
    //     else{
    //         setDark('light');
    //     }
    // },[])
    


    // useEffect(()=>{
    //     if(dark ==="dark"){
    //         document.documentElement.classList.add("dark");
    //     }
    //     else{
    //         document.documentElement.classList.remove("dark"); 
    //     }
    // },[dark])

    // const hendelDark= () =>{
    //     setDark(dark === "dark" ? "light" : "dark");
    // }

    return (
        <div className="mx-6">
             {/* <div className="text-center dark:bg-black">
             <input onClick={hendelDark} type="checkbox" className="toggle" checked />
           
        </div> */}
            <Baneerrpic></Baneerrpic>
            <AboutUsBG></AboutUsBG>
            <SErviceData></SErviceData>
            <Moreservice></Moreservice>
            <PopularProduct></PopularProduct>
            <MeetTeam></MeetTeam>
            <SupporService></SupporService>
             
            <Footer></Footer>
             
        </div>
    );
};

export default Home;