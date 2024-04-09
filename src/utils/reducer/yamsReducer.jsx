import { useReducer } from "react";

let id = 1
const initialState = {
    result: [],
    tripleSixCount: 0,
    straightCount: 0,
    fullHouseCount: 0,
    statistics: {
        tripleSix: 0,
        straight: 0,
        fullHouse: 0,
    },
    throwMax: 3,
}

const checkTripleSix = (throws) => {
    let count = 0;
    for (let i = 0; i < throws.length; i++) {
      const sortedDices = [...throws[i]].sort();
      if (sortedDices[0] === 6 && sortedDices[1] === 6 && sortedDices[2] === 6) {
        count++;
      }
    }
    return count;
  };
  
  const checkStraight = (throws) => {
    let count = 0;
    for (let i = 0; i < throws.length; i++) {
      const sortedDices = [...throws[i]].sort((a, b) => a - b);
      if ((sortedDices[0] === sortedDices[1] - 1) && (sortedDices[1] === sortedDices[2] - 1)) {
        count++;
      }
    }
    return count;
  };
  
  const checkFullHouse = (throws) => {
    let count = 0;
    for (let i = 0; i < throws.length; i++) {
      const sortedDices = [...throws[i]].sort();
      if ((sortedDices[0] === sortedDices[1] && sortedDices[1] !== sortedDices[2] && sortedDices[2] === sortedDices[3]) ||
          (sortedDices[0] === sortedDices[1] && sortedDices[1] === sortedDices[2] && sortedDices[2] !== sortedDices[3])) {
        count++;
      }
    }
    return count;
  };


const yamsReducer = (state, action) => {
    switch (action.type) {
        case 'DICE/SET_THROW_MAX':
            return {
                ...state,
                throwMax: action.payload
            }
        case 'DICE/RESET':
            return {
                ...state,
                tripleSixCount: 0,
                straightCount: 0,
                fullHouseCount: 0,
                result: [],
            }

        case 'DICE/THROW':
            const newDices = action.payload;
            let newCount = checkTripleSix(newDices);
            let straightCount = checkStraight(newDices);
            let fullHouseCount = checkFullHouse(newDices);


            console.log(newDices)
        
            return {
                ...state,
                tripleSixCount: newCount,
                straightCount: straightCount,
                fullHouseCount: fullHouseCount,
                statistics: {
                    tripleSix: state.statistics.tripleSix + newCount,
                    straight: state.statistics.straight + straightCount,
                    fullHouse: state.statistics.fullHouse + fullHouseCount,
                },
                result: newDices,
            }

        case 'ERROR/SET':
            return {
                ...state,
                errorMessage: action.payload,
            }


        default:
            return state;
    }
}

const useYamsReducer = () => useReducer(yamsReducer, initialState);

export default useYamsReducer;