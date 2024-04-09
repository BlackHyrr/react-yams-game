import { useYamsContext } from "../utils/context/yamsContext"
import './Input.css';

const Input = () => {
    const { state, dispatch } = useYamsContext();
    const error = state.errorMessage;

    const handleThrowMaxChange = (e) => {
        dispatch({ type: 'DICE/SET_THROW_MAX', payload: e.target.value });
    };

    
    const rollDice = () => {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let dice3 = Math.floor(Math.random() * 6) + 1;

        return [dice1, dice2, dice3];
    };

    const handleStartGame = () => {
        if (state.throwMax < 1) {
            dispatch({ type: 'ERROR/SET', payload: 'The number of throws must be greater than 0' });
            return;
        }
        dispatch({ type: 'ERROR/SET', payload: '' });

        let newDices = [];

        for(let i = 0; i < state.throwMax; i++) {
            const roll = rollDice();
            newDices.push(roll);
        }

        dispatch({ type: 'DICE/THROW', payload: newDices});
    }

    return (
        <>
            <div className={'form-container'}>
                <div className={'form container'}>
                    <input
                        type='number'
                        placeholder='Set the number of throws'
                        value={state.throwMax}
                        onChange={handleThrowMaxChange}
                    />
                    <button
                        className={'start-btn'}
                        onClick={handleStartGame}>Start</button>
                </div>
                {
                    error !== '' && <p className={'error-message'}>{error}</p>
                }
            </div>
        </>
    )
}

export default Input