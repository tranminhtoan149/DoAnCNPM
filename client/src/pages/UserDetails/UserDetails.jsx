import { useContext } from "react";
import Details from "../../components/AccountDetails/Detail";
import { AuthController } from "../../context/AuthController";
import RequireLogin from "../../components/RequireLogin/RequireLogin";

const UserDetails = props => {

    const {isLogin} = useContext(AuthController)


    return isLogin ? <Details />: <RequireLogin />;
}

export default UserDetails;