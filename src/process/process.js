import { useSelector } from "react-redux";
import "./process.scss";
function Process() {

    const state = useSelector((state) => state.ProcessReducer);

    return (
        <div className="process">
            <h5>
                Secret Key : <span>"{process.env.REACT_APP_SECRET_KEY}"</span>
            </h5>
            <div className="incoming">
                <h4>Incoming Data</h4>
                <p>{state.cypher}</p>
            </div>
            <div className="crypt">
                <h4>Decypted Data</h4>
                <p>{state.text}</p>
            </div>
        </div>
    );
}
export default Process;