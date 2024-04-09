import {createContext, useContext} from "react";
import useYamsReducer from "../reducer/yamsReducer.jsx";

const yamsContext = createContext()

export const useYamsContext = () => useContext(yamsContext);

const YamsContextProvider = ({children}) => {

    const [state, dispatch] = useYamsReducer();

    return <yamsContext.Provider value={{state, dispatch}}>
        {children}
    </yamsContext.Provider>
}

export default YamsContextProvider