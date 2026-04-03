import { IncomingMessage } from "http";
/**
 * Take a nodejs http IncomingMessage and convert it to an web standard Fetch API Request object.
 *
 * @param req - The incoming message
 * @param baseUrl - The base URL of the server
 * @returns The request and url
 */
export declare function toRequest(req: IncomingMessage): Request;
//# sourceMappingURL=utils.d.ts.map
