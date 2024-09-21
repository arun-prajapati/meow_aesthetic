import ConnectUs from "./ConnectUs"
import CopyRights from "./CopyRights"
import MainFooter from "./MainFooter"

const Footer = () => {
    return (
        <>
            {/* connect with us line div */}
            <ConnectUs />

            <MainFooter />

            {/* copyrights */}
            <CopyRights />
        </>
    )
}

export default Footer