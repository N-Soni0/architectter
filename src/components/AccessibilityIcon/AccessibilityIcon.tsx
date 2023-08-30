import { FiLock } from 'react-icons/fi';
import { MdPublic } from 'react-icons/md';

interface AccessibilityIconProps {
    isPrivate: boolean;
    className?: string;
    size?: string;
}

const AccessibilityIcon: React.FC<AccessibilityIconProps> = ({ isPrivate, className, size }) => {
  return (
    <div>
        {isPrivate ? (
            <FiLock className={className} size={size} />
        ) : <MdPublic className={className} size={size} />}
    </div>
  )
}

export default AccessibilityIcon