import AboutUsBG from "./Aboutus BG/AboutUsBG";
import Baneerrpic from "./Baneerr bg/Baneerrpic";
import CustomarsReview from "./CustomarsReview/CustomarsReview";
import Footer from "./Footer/Footer";
import MeetTeam from "./SErviceData/MeetTeam/MeetTeam";
import PopularProduct from "./SErviceData/PopularProduct/PopularProduct";
import SErviceData from "./SErviceData/SErviceData";
import SupporService from "./SErviceData/SupporService/SupporService";
 



const Home = () => {
    return (
        <div className="mx-6">
            
            <Baneerrpic></Baneerrpic>
            <AboutUsBG></AboutUsBG>
            <SErviceData></SErviceData>
            <PopularProduct></PopularProduct>
            <MeetTeam></MeetTeam>
            <SupporService></SupporService>
            <CustomarsReview></CustomarsReview>
            <Footer></Footer>
             
        </div>
    );
};

export default Home;