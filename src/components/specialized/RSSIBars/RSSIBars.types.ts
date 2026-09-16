export interface RSSIDistribution { near: number; mid: number; far: number; weak: number; }
export interface RSSIBarsProps { distribution?: RSSIDistribution; total?: number; className?: string; }