interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Data Entry Operator', 'Course Coordinator'],
  tenantName: 'Client',
  applicationName: 'admission form with pdf print',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Client profiles',
    'Invite Data Entry Operators and Course Coordinators',
    'Print Client profiles as a PDF form',
  ],
};
