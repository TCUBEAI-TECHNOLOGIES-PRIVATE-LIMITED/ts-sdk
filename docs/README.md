tcubesa-sdk / [Exports](modules.md)

Installation
============
```bash
npm install tcubesa-sdk
```

```bash
yarn add tcubesa-sdk
```

Usage
=====

#### NodeJS Imports

```typescript
import { Interceptor, StreamResponse, UnaryResponse, createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-node";
```

#### Web Imports

```typescript
import { createPromiseClient, createConnectTransport, Interceptor, StreamResponse, UnaryResponse } from "@bufbuild/connect-web";
```

#### Import necessary services from `tcubesa-sdk`

```typescript
import { 
    LoginService
} from "tcubesa-sdk";
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
