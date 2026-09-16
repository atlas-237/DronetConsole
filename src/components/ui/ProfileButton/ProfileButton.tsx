import type { ProfileButtonProps } from './ProfileButton.types';

export default function ProfileButton({ name, initials, avatarText, open = false, className = '', ...rest }: ProfileButtonProps) {
  const avatar = initials || avatarText || name?.charAt(0).toUpperCase() || '?';
  return <button type="button" className={`profbtn ${className}`} aria-expanded={open} {...rest}>
    <span className="avatar">{avatar}</span>
    {name && <span className="nm">{name}</span>}
  </button>;
}