const mapping: Record<string, string> = {
  addresses: 'address',
  clients: 'client',
  courses: 'course',
  phones: 'phone',
  qualifications: 'qualification',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
