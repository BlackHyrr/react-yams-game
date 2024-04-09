const DiceDisplay = ({ dice }) => {
    return (
        <div>
            {dice.map((die, index) => (
                <div key={index} className="die">
                    {die.value}
                </div>
            ))}
        </div>
    );
}