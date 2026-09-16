import { useMemo } from 'react';
import { Badge } from '@components/ui';
import { Panel, KVGrid } from '@components/data';
import { useToast } from '@components/feedback';
import Icon from '@icons';
import { Gallery, artifactThumb, CredentialsSection } from '@components/specialized';
import { SAMPLE_CREDENTIALS, SAMPLE_GALLERY } from '@/data/sampleData';

export default function AssetsView() {
  const toast = useToast();
  const [bigItem] = SAMPLE_GALLERY;
  const bigSvg = useMemo(() => artifactThumb(bigItem), [bigItem]);
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Panel title="Identité appareil — skydroid1" icon={<Icon name="asset" />} right={<Badge variant="ok" dot>Actif</Badge>}>
      <KVGrid pairs={[['ID', 'a1'], ['Type', 'Drone'], ['Modèle', 'Skydroid H16'], ['État', 'En vol'], ['Batterie', '82 %', { tone: 'ok' }], ['Position', '4.0538, 9.7602'], ['Altitude', '96 m'], ['Vitesse', '6,4 m/s'], ['Dernière MAJ', 'il y a 4 s'], ['Rapports envoyés', '3 124']]} />
    </Panel>
    <CredentialsSection credentials={SAMPLE_CREDENTIALS} onIssue={() => toast.show('Formulaire « émettre un jeton »', { tone: 'info' })} onRevoke={credential => toast.show(`Révocation : ${credential.jti}`, { tone: 'warn' })} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
      <div style={{ gridColumn: 'span 6' }}><Panel title="Galeries miniatures" icon={<Icon name="image" />}><Gallery items={SAMPLE_GALLERY.slice(0, 6)} size="mini" onClick={item => toast.show(item.title, { tone: 'info' })} /></Panel></div>
      <div style={{ gridColumn: 'span 6' }}><Panel title="Aperçu capture agrandie" icon={<Icon name="image" />}><div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 10, overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: bigSvg }} /></Panel></div>
    </div>
  </div>;
}
