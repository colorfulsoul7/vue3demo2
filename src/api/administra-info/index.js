import service from '@/`utils/service';
export function getAdministrator(params) {
  return service({
    url: '/api',
    method: 'get',
    params
  })
}