import { Link } from "react-router-dom";
import Card from "../components/Shared/Card";

const AboutPage = () => {
    return (
        <>
           <Card>
            <h2 className="text-display"> About This Application : </h2>
            <h2 className="text-display">This is a React app to track your learning process. Have Fun</h2>
            <Link to = '/'>Go to home page</Link>
            </Card> 
        </>
    );
};

export default AboutPage;