const settings = {
    backendURLLocal: "http://localhost:2023",
    backendURLRemote:"https://836a-196-12-156-70.ngrok.io"
}
const status = {
    LOADING: 1,
    DONE: 2,
    ERROR: 3,
    NOTHING: 4
};
export default {
    backendURL:settings.backendURLRemote,
    status
}