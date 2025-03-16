import { useJsonFetch } from "../hooks/useJsonFetch";

export const LoadingComponent = () => {
  const [data, loading, error] = useJsonFetch<{ status: string }>(
    "https://react-use-effect-2-bec.onrender.com/loading"
  );

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h2>/loading</h2>
      {loading && <p>Загрузка (ожидай 5 секунд)...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
      {data && <p>Ответ: {data.status}</p>}
    </div>
  );
};
