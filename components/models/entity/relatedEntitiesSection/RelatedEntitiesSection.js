import React from 'react';
import classNames from 'classnames';
import EntityGrid from 'components/models/page/entityGrid/EntityGrid';
import { ENTITIES } from 'shared/utils/globalProjectUtils/entityUtils/entityUtils';

function RelatedEntitiesSection({ className, title, entities }) {
  const supportedEntities = entities.filter((entity) => {
    return (
      entity?.type === ENTITIES.ARTICLE.type ||
      entity?.type === ENTITIES.ADVENTURE.type
    );
  });

  if (supportedEntities?.length < 1) {
    return null;
  }

  return (
    <div className={classNames(className)}>
      <EntityGrid
        allSameColSpan
        classNameTitle={'font-bold text-24 mb-24'}
        title={title}
        entities={supportedEntities}
      />
    </div>
  );
}

export default RelatedEntitiesSection;
