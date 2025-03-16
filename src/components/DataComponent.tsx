import { useJsonFetch } from "../hooks/useJsonFetch";

export const DataComponent = () => {
  const [data, loading, error] = useJsonFetch<{ status: string }>(
    "https://react-use-effect-2-bec.onrender.com/data"
  );

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2>/data</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
      {data && <p>Ответ: {data.status}</p>}
    </div>
  );
};
