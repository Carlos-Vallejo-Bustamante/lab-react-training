function Random({ max, min }) {

    return (
        <div className="random">

            <p>Random value between {min} and {max} = {Math.round(Math.random() * (max - min) + min)}</p>
        </div>
    )
}

export default Random;