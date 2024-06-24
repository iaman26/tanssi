import { ChainKey } from '@/config';
import { useChainFilesUrls } from '@/hooks/api/useChainFilesUrls';
import { FileUrl, Files } from '@/server/router/file/file.interfaces';
import { captureException } from '@sentry/nextjs';
import { useQuery } from '@tanstack/react-query';

const day = 24 * 60 * 60 * 1000;

export async function fetchFile(file: FileUrl): Promise<string | unknown> {
  const res = await fetch(file.url);

  if (!res.ok) {
    throw new Error(`Failed to fetch file from url: ${file.url}`);
  }

  if (file.filename.includes('.json')) {
    try {
      return await res.json();
    } catch (error) {
      console.error(error, res.body);
      captureException(error);
    }
  }

  return res.text();
}

export async function fetchFiles(url: FileUrl[]): Promise<unknown[]> {
  const files = await Promise.all(url.map((file) => fetchFile(file)));

  return files;
}

export function useDownloadedFiles(paraId: number | undefined, key: ChainKey) {
  const { data: urls, isSuccess, isFetched } = useChainFilesUrls(paraId, key);

  const query = useQuery<Partial<Files>>({
    queryKey: ['download-files', urls],
    enabled: isSuccess && !!urls?.length,
    staleTime: day,
    queryFn: async () => {
      if (!urls?.length) {
        return {};
      }

      const files = await fetchFiles(urls);

      return files?.reduce<Partial<Files>>((acc, file, index) => {
        const filename = urls[index]?.filename.split('/').at(-1) || '';
        const key = filename.replace(/\.txt|\.json/, '');

        return {
          ...acc,
          [key]: file,
        };
      }, {});
    },
  });

  return {
    ...query,
    isFetchedUrls: isFetched,
    shouldFetchFiles: !!urls?.length,
  };
}
