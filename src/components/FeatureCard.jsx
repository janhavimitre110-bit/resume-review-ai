function FeatureCard({ title, description }) {
  return (
    <div
      style={{
        width: "280px",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;