import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import TerminalIcon from "@mui/icons-material/Terminal";
import BarChartIcon from "@mui/icons-material/BarChart";
import CodeIcon from "@mui/icons-material/Code";
import img from "./img/image.png";

const features = [
  {
    icon: <SecurityIcon />,
    title: "Real-time Vulnerability Detection",
    desc: "Identify security issues as you type using static analysis.",
  },
  {
    icon: <CodeIcon />,
    title: "Multi-language Support",
    desc: "Works with JS, Python, Java, C#, PHP, and more.",
  },
  {
    icon: <TerminalIcon />,
    title: "Integrated Terminal",
    desc: "Built-in terminal for debugging.",
  },
  {
    icon: <BarChartIcon />,
    title: "Security Analytics",
    desc: "Track code security improvements over time.",
  },
];

const LandingPage = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#f9fafe", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Typography variant="h3" fontWeight={600} gutterBottom>
                Code Safely with{" "}
                <span style={{ color: "#7c3aed" }}>Built-in Security</span>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{ mb: 4 }}
              >
                Professional browser-based code editor with real-time
                vulnerability detection.
              </Typography>
              <Button variant="contained" sx={{ mr: 2 }} href="/signin">
                Start Coding Now
              </Button>
              <Button variant="outlined">Watch Demo</Button>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                component="img"
                src={img}
                alt="Editor Preview"
                sx={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "contain",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

   
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Powerful Features for Secure Development
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Chip icon={item.icon} label={item.title} variant="outlined" />
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "#eef2ff", py: 6, textAlign: "center" }}>
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Ready to Code Securely?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join thousands of developers who trust SecureCode.
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
