import { useState } from "react";
import './App.css';

function myApp() {
    var object = {
        name: "Kha",
        phone: "0897289123"  
    };
      const [info, setInfo] = useState(object);
      var change = () => {
        setInfo(previousState => {
          return { ...previousState, name:"Tùng"};
        });
      };
      return (
        <div className='MyApp App'>
          <div>
            {info.name}
          </div>
          <div>
          {info.phone}
          </div>
          <div>
            <button type="button" onClick={change}>Change Name</button>
          </div>
        </div>
      );
}

export default myApp;