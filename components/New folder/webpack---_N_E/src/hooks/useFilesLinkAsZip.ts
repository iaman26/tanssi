import { ChainKey } from '@/config';
import { useDownloadedFiles } from '@/hooks/useDownloadedFiles';
import JSZip from 'jszip';
import { useEffect, useState } from 'react';

export function useFilesLinkAsZip(
  paraId: number,
  key: ChainKey,
): string | undefined {
  const [link, setLink] = useState<string | undefined>();
  const { data } = useDownloadedFiles(paraId, key);

  useEffect(() => {
    if (!data) return;

    const zip = new JSZip();

    zip.file('spec-raw.json', JSON.stringify(data.specRaw));
    zip.file('genesis-state.txt', JSON.stringify(data.genesisState));
    zip.file('genesis-wasm.txt', JSON.stringify(data.genesisWasm));

    zip.generateAsync({ type: 'blob' }).then((blob) => {
      setLink(URL.createObjectURL(blob));
    });
  }, [data]);

  return link;
}
