import { useCallback, useRef, useState } from "react"

const useDropdown = () => {
    
    const [openDropdown, setOpenDropdown] = useState(null);
    const togglerRef = useRef(null);


    const handleMouseEnter = useCallback((menu) => {
        setOpenDropdown(prev => (prev !== menu ? menu : prev));
    },[]);

    const handleMouseLeave = useCallback( () => {
        setOpenDropdown(null);
    },[]);
 
    const handleDropdownItemClick = useCallback((dropdownName)=>{
        setOpenDropdown(prev => (prev === dropdownName? null : dropdownName))
    },[])

    const handlemobileDropdownItemClick = useCallback(() => {
            if (window.innerWidth < 767 && togglerRef.current) {
                togglerRef.current.click();
            }
        }, [])
    

    return {openDropdown, togglerRef,  handleMouseEnter, handleMouseLeave, handleDropdownItemClick, handlemobileDropdownItemClick}
   
};

export default useDropdown;
