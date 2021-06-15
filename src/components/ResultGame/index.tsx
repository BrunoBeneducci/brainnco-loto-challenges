import './custom.scss';

const ResultGame = props => {

    return (
        <ul>
            { 
                props.numeros ? (
                    props.numeros.map((el) => <li key={el}>{el}</li> )
                ) : (
                    <>
                        <li>00</li>
                        <li>00</li>
                        <li>00</li>
                        <li>00</li>
                        <li>00</li>
                        <li>00</li>
                    </>
                )
            }
        </ul>
    );
}

export default ResultGame;