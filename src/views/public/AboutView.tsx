import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// Import the content (make sure this import is pointing to your actual content file)
import aboutContent from "@/content/aboutContent";

const AboutView = () => {
  return (
    <Container style={{ backgroundColor: "#f0f8ff", padding: "30px", borderRadius: "10px" }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom style={{ color: "#d45d6f" }}>
        {aboutContent.title}
      </Typography>

      {/* Introduction */}
      <Typography variant="body1" style={{ color: "#4caf50", fontSize: "18px", marginBottom: "20px" }}>
        {aboutContent.introduction}
      </Typography>

      {/* Additional Text */}
      <Typography variant="body2" style={{ color: "#555555", fontStyle: "italic", marginBottom: "30px" }}>
        We are a team of passionate students working on innovative solutions to create a better tomorrow.
      </Typography>

      {/* Social Links */}
      <div>
        {aboutContent.socialLinks.map((link, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#d45d6f",
                fontWeight: "bold",
                textDecoration: "none",
                borderBottom: "2px solid #d45d6f",
                paddingBottom: "2px",
              }}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AboutView;
