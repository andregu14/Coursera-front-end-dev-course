import ReactPlayer from "react-player"

const ReactPlayerExample = () => {
    const vidUrl = "https://www.youtube.com/watch?v=wpZQFV5ID6M&list=PLXdi-Ns7w3jjfNPMl836BKjxZONnxvXPw"

    return (
        <div>
            <h1>React Player example</h1>
            <div className="video">
                <ReactPlayer
                    url={vidUrl}
                    playing={false}
                    volume={0.2}
                    controls={true}
                />
            </div>
        </div>
    )
}

export default ReactPlayerExample