Installation
============
```bash
npm install scanswift-sdk
```

```bash
yarn add scanswift-sdk
```


Usage
=====

#### NodeJS Imports

```typescript
import { Interceptor, StreamResponse, UnaryResponse, createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
```

#### Web Imports

```typescript
import { Interceptor, StreamResponse, UnaryResponse, createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
```

#### Import necessary services from `scanswift-sdk`

```typescript
import { 
    LoginService
} from "scanswift-sdk";
```

#### Execution

```typescript

const authToken = ""; // Enter the API Key provided
const apiEndPoint = ""; // The API endpoint to be used

/* appendAuthToken is an interceptor that appends the auth token to the request prior to sending the request */
const appendAuthToken: Interceptor = (next) => async (req) => {
    // Append the
    req.header.append("auth_token", authToken);
    return await next(req).catch(err => {
        if (err) {
            console.error(err);
        }
    }).then(resp => {
        return <UnaryResponse | StreamResponse>resp;
    });
};

/*Create a transport function*/
function getTransport() {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: [
            appendAuthToken
        ]
    });
}

/*Create a client that interacts with the login service*/
function getLoginServiceClient() {
    return createPromiseClient(LoginService, getTransport());
}

const loginClient = getLoginServiceClient();

let response = await loginClient.userLogin({ username: "username", plainTextPassword: "password" });

console.log(response);
```