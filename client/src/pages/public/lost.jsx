import { useParams } from "react-router-dom";


const Lost = () => {
    
    const url = useParams()

    return (
        <main>
            <h1>404</h1>
            <p>url : {url["*"] }</p>
        </main>
    );
};

export default Lost;