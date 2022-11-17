import { createContext, useContext, useState } from "react";

const SampleContext = createContext({});

const SampleContextProvider = ({ children }) => {

    const [hello, setHello] = useState("hello all")

    return (
        <SampleContext.Provider value={{
          hello, setHello
        }}>
          {children}
        </SampleContext.Provider>
      );
}
export default SampleContextProvider;

export const useSampleContext = () => useContext(SampleContext);
