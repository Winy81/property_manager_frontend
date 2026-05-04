import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export default function ServiceShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || id === "undefined") {
      setError("Invalid Service ID");
      setLoading(false);
      return;
    }

    fetch(APP_CONFIG.api.serviceShow(id))
      .then((res) => {
        if (!res.ok) throw new Error(`Server Error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Could not load service details. Check if the API is running.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="status"><h3>Loading service details...</h3></div>;

  return (
    <div className="service-detail">
      <div className="detail-card">
        <h1 className="title">{service?.title}</h1>
        <p className="description">{service?.description || "No description available."}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">← Back to Services</button>
    </div>
  );
}
