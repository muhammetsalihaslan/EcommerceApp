import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRiNzcwMGZhNTBiZmM0OWU2ZTlmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTk2ODY0NCwiZXhwIjoxNzAxNTA0NjQ0fQ._sg1YkNDXBpkWHXdNLwiHkBKlaylgCXNZK5sv9CdX8g"


export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}` },
});