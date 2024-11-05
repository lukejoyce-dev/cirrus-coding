import { Request } from "express";
export interface RequestWithAuth extends Request {
  currentTenant?: any; // Tenant;
  currentUser?: any; // User;
  currentRole?: any; // Role;
  currentToken?: any; // UserToken;
  tokenType?: any; // UserTokenType;
}
