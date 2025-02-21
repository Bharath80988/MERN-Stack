import Button from "./button"
import trackingMyButtonComp from "./tackingMyButtonComp"
const HoC = () => {
    const ButtonTrack = trackingMyButtonComp(Button)
    return(
        <div>
            <h1>Welcome to Higher Order Components</h1>
            <Button value={"Login"} />
            <ButtonTrack value = {"Login"} trackingInfo={{"CustID":"Hello","Password":"Password"}}/>
        </div>
    )
}

export default HoC