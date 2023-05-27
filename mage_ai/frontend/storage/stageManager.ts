import StageManagerApplicationType from '@interfaces/StageManagerApplicationType';
import { get, set } from './localStorage';
import { remove } from '@utils/array';

const STAGE_MANAGER_APPLICATIONS = 'STAGE_MANAGER_APPLICATIONS';

type StageManagerApplicationsType = {
  [uuid]: StageManagerApplicationType
};

export function getStageManagerApplications(): StageManagerApplicationsType {
  return get(STAGE_MANAGER_APPLICATIONS, {});
}

export function setStageManagerApplications(applications: StageManagerApplicationsType) {
  set(STAGE_MANAGER_APPLICATIONS, applications);
}

export function addStageManagerApplication(uuid: string): StageManagerApplicationsType {
  const apps = getStageManagerApplications() || {};

  if (!apps?.[uuid]) {
    apps[uuid] = {};
  }

  setStageManagerApplications(apps);

  return apps;
}

export function removeStageManagerApplication(uuid: string): StageManagerApplicationsType {
  const apps = getStageManagerApplications() || {};

  delete apps[uuid];

  return apps;
}
