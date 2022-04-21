import {
  allTestsPath,
  ANALYZER_ID,
  departmentAnalyzerPath,
  departmentAnalyzersPath,
  departmentTestsPath,
  departmentVerifsPath,
  DEPARTMENT_ID,
  EXP_ROUTE,
  locationPath,
  locationsPath,
  LOCATION_ID,
  methodPath,
  methodsPath,
  METHOD_ID,
  ORGANIZATION_ID,
  orgPath,
  settingsMembersPath,
  settingsOrganizationPath,
  settingsOrganizationsPath,
  settingsPath,
  settingsProfilePath,
  settingsSubscriptionsPath,
  STUDY_ID,
  verifExp,
  verifPath,
  verifPathShared,
  verifsPath,
  verifStudy,
  VERIF_ID
} from './paths';

export const genOrgLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return orgPath.replace(ORGANIZATION_ID, orgId);
};

export const genLocLink = (p: { prefix?: string; orgId: string; locId: string }) => {
  const { prefix = '', orgId, locId } = p;
  return locationPath.replace(ORGANIZATION_ID, orgId).replace(LOCATION_ID, locId);
};

export const genLocsLink = (p: { prefix?: string; orgId: string }) => {
  return locationsPath.replace(ORGANIZATION_ID, p.orgId);
};

export const genMethodLink = (p: { prefix?: string; orgId: string; methodId: string }) => {
  const { prefix = '', orgId, methodId } = p;
  return methodPath.replace(ORGANIZATION_ID, orgId).replace(METHOD_ID, methodId);
};

export const genMethodsLink = (p: { prefix?: string; orgId: string }) => {
  return methodsPath.replace(ORGANIZATION_ID, p.orgId);
};

export const genTestsLink = (p: { prefix?: string; orgId: string }) => {
  return allTestsPath.replace(ORGANIZATION_ID, p.orgId);
};
export const genDepLink = (p: {
  prefix?: string;
  orgId: string;
  locId: string;
  depId: string;
}) => {
  const { prefix = '', orgId, locId, depId } = p;
  return departmentAnalyzersPath
    .replace(ORGANIZATION_ID, orgId)
    .replace(LOCATION_ID, locId)
    .replace(DEPARTMENT_ID, depId);
};

export const genDepAnalyzersLink = (p: {
  prefix?: string;
  orgId: string;
  locId: string;
  depId: string;
}) => {
  const { prefix = '', orgId, locId, depId } = p;
  return departmentAnalyzersPath
    .replace(ORGANIZATION_ID, orgId)
    .replace(LOCATION_ID, locId)
    .replace(DEPARTMENT_ID, depId);
};

export const genAnalyzerLink = (p: {
  prefix?: string;
  orgId: string;
  locId: string;
  depId: string;
  analyzerId: string;
}) => {
  const { prefix = '', orgId, locId, depId, analyzerId } = p;
  return departmentAnalyzerPath
    .replace(ORGANIZATION_ID, orgId)
    .replace(LOCATION_ID, locId)
    .replace(DEPARTMENT_ID, depId)
    .replace(ANALYZER_ID, analyzerId);
};

export const genDepTestsLink = (p: {
  prefix?: string;
  orgId: string;
  locId: string;
  depId: string;
}) => {
  const { prefix = '', orgId, locId, depId } = p;
  return departmentTestsPath
    .replace(ORGANIZATION_ID, orgId)
    .replace(LOCATION_ID, locId)
    .replace(DEPARTMENT_ID, depId);
};

export const genDepVerifsLink = (p: {
  prefix?: string;
  orgId: string;
  locId: string;
  depId: string;
}) => {
  const { prefix = '', orgId, locId, depId } = p;
  return departmentVerifsPath
    .replace(ORGANIZATION_ID, orgId)
    .replace(LOCATION_ID, locId)
    .replace(DEPARTMENT_ID, depId);
};

export const genVerifsLink = (p: { prefix?: string; orgId: string }) => {
  return verifsPath.replace(ORGANIZATION_ID, p.orgId);
};

export const genVerifLink = (p: { prefix?: string; orgId: string; verifId: string }) => {
  return verifPath.replace(ORGANIZATION_ID, p.orgId).replace(VERIF_ID, p.verifId) + '/intro';
};

export const genVerifSharedLink = (p: { prefix?: string; orgId: string; verifId: string }) => {
  return (
    verifPathShared.replace(ORGANIZATION_ID, p.orgId).replace(VERIF_ID, p.verifId) + '/intro'
  );
};

export const genVerifStudyLink = (p: {
  prefix?: string;
  orgId: string;
  verifId: string;
  studyId: string;
}) => {
  return verifStudy
    .replace(ORGANIZATION_ID, p.orgId)
    .replace(VERIF_ID, p.verifId)
    .replace(STUDY_ID, p.studyId);
};

export const genVerifExperimentLink = (p: {
  prefix?: string;
  orgId: string;
  verifId: string;
  expKey: string;
}) => {
  return verifExp
    .replace(ORGANIZATION_ID, p.orgId)
    .replace(VERIF_ID, p.verifId)
    .replace(EXP_ROUTE, p.expKey);
};

export const genSettingsLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return settingsPath.replace(ORGANIZATION_ID, orgId);
};

export const genSettingsProfileLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return settingsProfilePath.replace(ORGANIZATION_ID, orgId);
};

export const genSettingsOrgLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return settingsOrganizationPath.replace(ORGANIZATION_ID, orgId);
};

export const genSettingsOrgsLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return settingsOrganizationsPath.replace(ORGANIZATION_ID, orgId);
};

export const genSettingsMembersLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return settingsMembersPath.replace(ORGANIZATION_ID, orgId);
};

export const genSettingsSubscriptionLink = (p: { prefix?: string; orgId: string }) => {
  const { prefix = '', orgId } = p;
  return settingsSubscriptionsPath.replace(ORGANIZATION_ID, orgId);
};
