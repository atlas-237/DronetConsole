import { Badge } from '@components/ui';
import { Panel } from '@components/data';
import { useToast } from '@components/feedback';
import Icon from '@icons';
import { Gallery } from '@components/specialized';
import { SAMPLE_GALLERY } from '@/data/sampleData';

export default function GalleryView() {
  const toast = useToast();
  return <Panel title="Galerie · 95 éléments" icon={<Icon name="image" />} right={<Badge variant="brand">12 nouveaux</Badge>}>
    <Gallery items={SAMPLE_GALLERY} onClick={item => toast.show(`Visionneuse · ${item.title}`, { tone: 'info' })} />
  </Panel>;
}
