import { log } from "console";
import { api } from "encore.dev/api"
import {JWK, JWT, JWTPayload, JWKGenerateOptions} from "ts-jose"

const jwk = await generateKeyPair(); // TODO? move this into secret by encore not dynamic generate

interface Claims {
    id: string,
    name: string
}

export const login = api(
    { method: "POST", path: "/login" },
    async (): Promise<{ token: string }> => { // TODO add user request
        const payload: JWTPayload = {
            sub: "graphql auth",
            iss: "graphql auth",
            iat: Date.now(),
            exp: Date.now() + 2 * 60 * 60 * 1000, // 2 hour
            claims: {
                name: "John Doe",
                id: "TF0213",
            },
        };
        const token = await JWT.sign(payload, jwk);

        return { token };
    }
)

export const verify = api(
    { method: "POST", path: "/verify"},
    async ({token}: {token: string}): Promise<{user?: string}> => {

        const payload = await JWT.verify(token, jwk);
        const claims = payload.claims as Claims;

        return {user: claims.name ?? "failed"};
    }
)

async function generateKeyPair(): Promise<JWK> {
    const option: JWKGenerateOptions = { use: 'sig',  modulusLength: 2048};
    const key = await JWK.generate("RS256", option);
    return key;
}

