import service from '@/utils/service';
export function getAdministratorInfo(params) {
  return service({
    url: '/api',
    method: 'get',
    params
  })
}