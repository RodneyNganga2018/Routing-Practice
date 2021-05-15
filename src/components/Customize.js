const Customize = (props) => {
    return(
        <>
            <h1 style={{backgroundColor: props.color, color: props.text}}>The word is {props.word}</h1>
        </>
    )
}

export default Customize;