import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovie=({setInpF,setRateF,inpF,rateF})=>{

    const handleReset =()=>{
        setInpF('')
        setRateF(0)
    }
    return(
        <div className="filterMovie">
            <input value={inpF} onChange={(e)=> setInpF(e.target.value)}/>
            <Rating value={rateF} name="simple-controlled" onChange={(e)=> setRateF(e.target.value)} />
            <Button variant="outline-warning" onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default FilterMovie