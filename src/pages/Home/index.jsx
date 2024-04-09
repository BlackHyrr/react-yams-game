import React from 'react';
import Input from '../../components/Input';
import { useYamsContext } from '../../utils/context/yamsContext';
import './index.css';

const Home = () => {
    const { state } = useYamsContext();

    return (
        <div>
            <h1>Game</h1>
            <Input/>
            <div>
                {state.errorMessage !== '' && <p>{state.errorMessage}</p>}
                {state.tripleSixCount > 0 && <p>Triple Six: {state.tripleSixCount}</p>}
                {state.straightCount > 0 && <p>Straight: {state.straightCount}</p>}
                {state.fullHouseCount > 0 && <p>Full House: {state.fullHouseCount}</p>}
                {state.result.length > 0 && (
                    <div className='result'>
                        <h2>Rolls</h2>
                        <ul>
                            {state.result.map((item, index) => (
                                <li className='roll' key={index}>
                                    {item.map((dice, index) => (
                                        <span className='dice' key={index}>{dice}</span>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;