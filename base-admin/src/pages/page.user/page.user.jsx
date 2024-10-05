import { MicroFrontend } from "../../config";

export default function PageUser({history}) {
    return (
        <MicroFrontend history={history} host={"http://localhost:3002"} name="User" />
    );
}