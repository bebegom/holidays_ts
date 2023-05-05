import earthIMG from "../assets/images/pexels-marina-leonova-7634436 1 (no bg).png"

const LoadingIndicator = () => {

    return (
        <div id="loading-wrapper">
            <div id="loading-circle">
                <img src={earthIMG} alt="" />
            </div>
        </div>

    )
}

export default LoadingIndicator