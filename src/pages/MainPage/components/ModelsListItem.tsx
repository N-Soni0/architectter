import React from 'react'

interface ModelsListItemProps {
    model: ModelDoc;
}

const ModelsListItem: React.FC<ModelsListItemProps> = ({ model }) => {
  return (
    <li>{model.name}</li>
  )
}

export default ModelsListItem