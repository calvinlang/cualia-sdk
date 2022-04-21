export const ALL = '*';
export const DASHBOARD = '/';
export const LOGIN = '/login';
export const REGISTRATION = '/registration';
export const RESEND_ACTIVATION_LINK = '/resend-activation-link';
export const ACTIVATION = '/activate/:uid/:token';
export const RESET_PASSWORD = '/reset-password';
export const RESET_PASSWORD_CONFIRM = '/password/reset/confirm/:uid/:token';
export const ORGANIZATION = '/org';
export const ORGANIZATIONS = '/your-organizations';
export const ORGANIZATION_ID = `:orgId`;
export const LOCATIONS = `locs`;

export const LOCATION = `loc`;
export const LOCATION_ID = `:locId`;
export const DEPARTMENT = `dep`;
export const DEPARTMENT_ID = `:depId`;

export const METHOD = 'test-system';
export const METHODS = 'test-systems';
export const METHOD_ID = ':methodId';
export const TEST = 'test';
export const TESTS = 'tests';
export const TEST_ID = ':testId';
export const ANALYZER_TEST = 'analyzer-test';
export const ANALYZER_TESTS = 'analyzer-tests';
export const ANALYZER_TEST_ID = ':analyzer-testId';

export const ANALYZER = 'analyzer';
export const ANALYZERS = 'analyzers';
export const ANALYZER_ID = ':analyzerId';
export const VERIFS = 'verifs';
export const VERIF = 'verif';
export const STUDY = 'study';
export const STUDY_ID = ':studyId';
export const EXPERIMENT = 'exp';
export const EXP_ROUTE = ':experimentRoute';
export const VERIF_ID = ':verifId';
export const SETTINGS = 'settings';
export const PROFILE = 'profile';
export const MEMBERS = 'members';
export const SUBSCRIPTION = 'subscription';

export const orgPath = `${ORGANIZATION}/${ORGANIZATION_ID}`;
export const locationsPath = `${orgPath}/${LOCATIONS}`;
export const locationPath = `${orgPath}/${LOCATION}/${LOCATION_ID}`;
export const departmentPath = `${locationPath}/${DEPARTMENT}/${DEPARTMENT_ID}`;
export const methodsPath = `${orgPath}/${METHODS}`;
export const methodPath = `${orgPath}/${METHOD}/${METHOD_ID}`;
export const allTestsPath = `${orgPath}/${TESTS}`;
export const testsPath = `${methodsPath}/${TESTS}`;
export const testPath = `${orgPath}/${TEST}/${TEST_ID}`;
export const analyzerTestsPath = `${orgPath}/${ANALYZER_TESTS}`;

export const departmentAnalyzerPath = `${departmentPath}/${ANALYZER}/${ANALYZER_ID}`;
export const departmentAnalyzersPath = `${departmentPath}/${ANALYZERS}`;
export const departmentTestsPath = `${departmentPath}/${TESTS}`;
export const departmentVerifsPath = `${departmentPath}/${VERIFS}`;

export const verifsPath = `${orgPath}/${VERIFS}`;
export const verifPath = `${orgPath}/${VERIF}/${VERIF_ID}`;
export const verifPage = `${verifPath}/:verifPage`;
export const verifPathShared = `/${VERIF}-share/${VERIF_ID}`;
export const verifPageShared = `${verifPathShared}/:verifPage`;

export const verifPagePrint = `${verifPath}/:verifPage/print`;
export const verifStudy = `${verifPath}/${STUDY}/${STUDY_ID}`;
export const verifStudyExp = `${verifPath}/${STUDY}/${STUDY_ID}/${EXP_ROUTE}`;
export const verifExp = `${verifPath}/${EXPERIMENT}/${EXP_ROUTE}`;
export const verifPagePrintShared = `${verifPathShared}/:verifPage/print`;
export const verifStudyShared = `${verifPathShared}/${STUDY}/${STUDY_ID}`;
export const verifStudyExpShared = `${verifPathShared}/${STUDY}/${STUDY_ID}/${EXP_ROUTE}`;
export const verifExpShared = `${verifPathShared}/${EXPERIMENT}/${EXP_ROUTE}`;

export const settingsPath = `${orgPath}/${SETTINGS}`;
export const settingsProfilePath = `${settingsPath}/${PROFILE}`;
export const settingsOrganizationPath = `${settingsPath}${ORGANIZATION}`;
export const settingsOrganizationsPath = `${settingsPath}${ORGANIZATIONS}`;
export const settingsMembersPath = `${settingsPath}/${MEMBERS}`;
export const settingsSubscriptionsPath = `${settingsPath}/${SUBSCRIPTION}`;
