import {useState} from 'react';
import { FactSlotsPositionData } from "../Components/FactsObject"

const useFactsSliderLogic = () => {

    const [firstFactSlot, setFirstFactSlot] = useState(FactSlotsPositionData.FirstFactSlot);
    const [secondFactSlot, setSecondFactSlot] = useState(FactSlotsPositionData.SecondFactSlot);
    const [thirdFactSlot, setThirdFactSlot] = useState(FactSlotsPositionData.ThirdFactSlot);
    const [fourthFactSlot, setFourthFactSlot] = useState(FactSlotsPositionData.FourthFactSlot);
    const [fifthFactSlot, setFifthFactSlot] = useState(FactSlotsPositionData.FifthFactSlot);
    const [sixthFactSlot, setSixthFactSlot] = useState(FactSlotsPositionData.SixthFactSlot);

    const slideLeftHandler = () => {
        function animate(){
            const saveFirst = firstFactSlot
            setFirstFactSlot(fourthFactSlot);
            setFourthFactSlot(fifthFactSlot);
            setFifthFactSlot(sixthFactSlot);
            setSixthFactSlot(thirdFactSlot);
            setThirdFactSlot(secondFactSlot);
            setSecondFactSlot(saveFirst);
        }

        setTimeout(animate, 360)
    };

    const slideRightHandler = () => {
        function animate(){
            const savedFirst = firstFactSlot;
            setFirstFactSlot(secondFactSlot);
            setSecondFactSlot(thirdFactSlot);
            setThirdFactSlot(sixthFactSlot);
            setSixthFactSlot(fifthFactSlot);
            setFifthFactSlot(fourthFactSlot);
            setFourthFactSlot(savedFirst);
        }
        setTimeout(animate, 360)
    }

    const positioner = (position) => {
        let positionObject = {};
    
        if (position === "left-top") {
            positionObject = firstFactSlot
        };
    
        if (position === "middle-top") {
            positionObject = secondFactSlot
        };
    
        if (position === "right-top") {
            positionObject = thirdFactSlot;
        };
    
        if (position === "left-bot") {
            positionObject = fourthFactSlot;
        };
        if (position === "middle-bot") {
            positionObject = fifthFactSlot;
        };
        if (position === "right-bot") {
            positionObject = sixthFactSlot;
        };
    
        return positionObject;
    };


  return {slideLeftHandler, slideRightHandler, positioner}
}

export default useFactsSliderLogic