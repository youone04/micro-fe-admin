import { MicroFrontend } from "../../config";

export default function PageAdmin({history}) {
    return (
        <MicroFrontend history={history} host={"http://localhost:3001"} name="Admin" />
    );
}