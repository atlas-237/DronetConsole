import logoSrc from '../../../images/darta-systems-mark-512.png';
import type { AuthCardProps } from './AuthCard.types';

export default function AuthCard({ title, subtitle, logo, tag, children, footer, className = '' }: AuthCardProps) {
	return (
		<main className={`auth ${className}`}>
			<section className="auth-card">
				<div className="auth-logo">
					{logo ?? <img src={logoSrc} alt="Darta Systems" />}
				</div>
				{tag && <div className="auth-tag">{tag}</div>}
				{title && <h1>{title}</h1>}
				{subtitle && <p>{subtitle}</p>}
				{children}
				{footer && <footer>{footer}</footer>}
			</section>
		</main>
	);
}