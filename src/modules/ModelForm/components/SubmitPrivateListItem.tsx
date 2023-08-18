import React from 'react'
import SubmitListItem from '../UI/SubmitListItem';

interface SubmitPrivateListItemProps {
    isPrivate?: boolean;
}

const SubmitPrivateListItem: React.FC<SubmitPrivateListItemProps> = ({ isPrivate }) => {
  return (
    <SubmitListItem className='flex items-center justify-between'>
        <h4>Accessibility</h4>
        {
            isPrivate ? (
                <p>Private</p>
            ) : (
                <p>Public</p>
            )
        }
    </SubmitListItem>
  )
}

export default SubmitPrivateListItem