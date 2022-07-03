export const ENTITIES = {
  ARTICLE: { type: 'ARTICLE', path: '/articles' },
  ADVENTURE: { type: 'ADVENTURE', path: '/adventures' },
  DESTINATION: { type: 'DESTINATION', path: '/destinations' },
  EVENT: { type: 'EVENT', path: '/events' },
  PLACE: { type: 'PLACE', path: '/places' },
};

export function getEntityUrl(entity = {}) {
  const { id, type } = entity;
  const entityType = ENTITIES[type];

  const entityPath = entityType.path;

  return `${entityPath}/${id}`;
}
