import { useJsonFetch } from "../hooks/useJsonFetch";

export const ErrorComponent = () => {
  const [data, loading, error] = useJsonFetch<{ status: string }>(
    "https://react-use-effect-2-bec.onrender.com/error"
  );

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2>/error</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
      {data && <p>Ответ: {JSON.stringify(data)}</p>}
    </div>
  );
};
