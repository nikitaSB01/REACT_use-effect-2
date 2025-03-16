import { useEffect, useState } from "react";

export function useJsonFetch<T>(
  url: string,
  opts?: RequestInit
): [T | null, boolean, string | null] {
  const [data, setData] = useState<T | null>(null); // результат запроса
  const [loading, setLoading] = useState<boolean>(true); // индикатор загрузки
  const [error, setError] = useState<string | null>(null); // текст ошибки (если есть)

  useEffect(() => {
    let isMounted = true; // чтобы не обновлять состояние, если компонент размонтирован

    setLoading(true); // при запуске запроса - включаем загрузку
    setError(null); // сбрасываем ошибку

    fetch(url, opts)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        // Пытаемся распарсить JSON
        const json = await response.json();

        if (isMounted) {
          setData(json); // сохраняем результат
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message); // сохраняем ошибку
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false); // выключаем загрузку
        }
      });

    return () => {
      isMounted = false; // чтобы не обновлять состояние после размонтирования
    };
  }, [url]); // хук сработает при изменении url

  return [data, loading, error];
}
