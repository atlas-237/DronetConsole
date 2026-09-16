import Icon from '@icons';
import type { AttentionPopoverProps } from './AttentionPopover.types';

export default function AttentionPopover({
  items = [],
  open = false,
  calm = items.length === 0,
  onToggle,
  onSelect,
  onClose,
  className = '',
}: AttentionPopoverProps) {
  return (
    <div className={`attn ${className}`.trim()} data-calm={calm}>
      <button type="button" className="attn-toggle" aria-expanded={open} aria-label="Attention" onClick={onToggle}>
        <Icon name={calm ? 'check' : 'alert'} size={18} />
        {items.length > 0 && <span className="attn-n">{items.length > 99 ? '99+' : items.length}</span>}
      </button>
      {open && (
        <div className="attn-card" role="dialog" aria-label="Points d'attention">
          {items.map(item => (
            <button key={item.id} type="button" className="attn-row" disabled={item.disabled} onClick={() => onSelect?.(item)}>
              <span>{item.label}</span>
              {item.detail && <span className="attn-lab">{item.detail}</span>}
            </button>
          ))}
          {items.length === 0 && <div className="attn-row">Aucun point d'attention</div>}
          {onClose && <div className="attn-nav"><span>Surveillance</span><button type="button" aria-label="Fermer" onClick={onClose}>×</button></div>}
        </div>
      )}
    </div>
  );
}
