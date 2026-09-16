export interface BreakdownPart { name: string; value: number; colorVar: string; }
export interface BreakdownFact { label: string; value: string | number; help?: string; tone?: string; }
export interface BreakdownProps { title?: string; lead?: string | number; unit?: string; sub?: string; parts?: BreakdownPart[]; facts?: BreakdownFact[]; collapsible?: boolean; defaultOpen?: boolean; className?: string; }
export interface BreakdownBodyProps { sub?: string; parts: BreakdownPart[]; facts: BreakdownFact[]; total: number; }