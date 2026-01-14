import React from 'react';

export interface ParticipantAvatarProps {
  /**
   * Participant name
   */
  name: string;
  /**
   * Avatar image URL
   */
  imageUrl?: string;
  /**
   * Avatar size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is speaking/active
   */
  isActive?: boolean;
  /**
   * Show name badge
   */
  showName?: boolean;
  /**
   * Online status
   */
  isOnline?: boolean;
}

/**
 * Avatar component for meeting participants
 */
export const ParticipantAvatar: React.FC<ParticipantAvatarProps> = ({
  name,
  imageUrl,
  size = 'medium',
  isActive = false,
  showName = false,
  isOnline = true,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeClasses = {
    small: 'participant-avatar--small',
    medium: 'participant-avatar--medium',
    large: 'participant-avatar--large',
  };

  return (
    <div className={`participant-avatar ${sizeClasses[size]} ${isActive ? 'participant-avatar--active' : ''}`}>
      <div className="participant-avatar__container">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="participant-avatar__image" />
        ) : (
          <div className="participant-avatar__initials">{getInitials(name)}</div>
        )}
        {isOnline && <span className="participant-avatar__status"></span>}
      </div>
      {showName && <span className="participant-avatar__name">{name}</span>}
    </div>
  );
};
