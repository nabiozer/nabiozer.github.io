
import { useHistory } from "react-router-dom";
import Background from "../../_components/App/Background";



export default () => {

const history = useHistory();
  
  return (
    <>
      <div className="background">
           <Background/>
      </div>
    
  
    </>
  );
};
