import type { GalleryItem } from '@components/specialized/Gallery/Gallery.types';
export interface ArtifactViewerModalProps { open: boolean; onClose?: () => void; items?: GalleryItem[]; initialIndex?: number; onDelete?: (item: GalleryItem, index: number) => void; onDownload?: (item: GalleryItem, index: number) => void; }
