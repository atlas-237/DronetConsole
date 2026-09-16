import Skeleton from '../Skeleton/Skeleton';
import type { LoadingStateProps } from './LoadingState.types';

export default function LoadingState({ rows = 5, rowHeight = 46 }: LoadingStateProps) {
  const items = []; for (let i = 0; i < rows; i += 1) items.push(<Skeleton key={i} height={rowHeight} className="mb-2 last:mb-0" />);
  return <div className="p-4">{items}</div>;
}
