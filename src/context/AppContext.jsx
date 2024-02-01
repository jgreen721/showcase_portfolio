import {useState,useContext, createContext} from "react"
import {data as sampledata} from "../data"

const AppContext = createContext();

export const useAppContext = ()=>{
    return useContext(AppContext)
};


export const AppProvider = ({children})=>{
        const [appTheme,setAppTheme] = useState("dark")
        const [currCategory,setCurrCategory] = useState("");
        const [data,setData] = useState(sampledata)

        console.log(data)


            const updateCategory = (category)=>{
                console.log("newCategory",category);
                setCurrCategory(category)
            }

            

const values = {
        appTheme,
        data,
        currCategory,
        updateCategory,
        setAppTheme,
}

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}