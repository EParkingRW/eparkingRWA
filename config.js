const settings = {
    backendURLLocal: "http://localhost:2023",
    backendURLRemote:"https://735b-105-178-112-193.ngrok.io"
}
const status = {
    LOADING: 1,
    DONE: 2,
    ERROR: 3,
    NOTHING: 4
};
export default {
    backendURL:settings.backendURLLocal,
    status
}