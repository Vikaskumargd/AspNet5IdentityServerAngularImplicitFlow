import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable()
export class HasAdminRoleCanLoadGuard implements CanLoad {

    private hasUserAdminRole = false;

    constructor(
        private securityService: OidcSecurityService
    ) {
    }

    canLoad(route: Route): boolean {

        return true;
        //let userData = this.securityService.getUserData();

        //for (let i = 0; i < userData.role.length; i++) {
        //    if (userData.role[i] === 'admin') {
        //        this.hasUserAdminRole = true;
        //    }
        //}

        //return this.hasUserAdminRole && this.securityService.isAuthorized;
    }
}