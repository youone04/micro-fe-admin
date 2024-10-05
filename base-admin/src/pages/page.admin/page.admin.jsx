import { MicroFrontend } from "../../config";

export function PageAdmin({history}) {
    return (
        <MicroFrontend history={history} host={"http://localhost:3001"} name="Admin" />
    );
}

export function PageAdminFaktur({history}) {
    return (
        <MicroFrontend history={history} host={"http://localhost:3001"} name="Admin" />
    );
}

export function PageAdminCreate({history}) {
    return (
        <MicroFrontend history={history} host={"http://localhost:3001"} name="Admin" />
    );
}