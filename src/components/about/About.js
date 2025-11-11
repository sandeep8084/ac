import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  Chip,
  LinearProgress,
} from "@mui/material";
import {
  BusinessCenter as BusinessCenterIcon,
  School as SchoolIcon,
  VerifiedUser as VerifiedUserIcon,
  EmojiEvents as EmojiEventsIcon,
  Group as GroupIcon,
  Build as BuildIcon,
  Speed as SpeedIcon,
  EnergySavingsLeaf as EcoIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: "John Martinez",
      role: "Founder & Lead Technician",
      experience: "15+ years",
      certifications: ["EPA Certified", "NATE Certified"],
      avatar: "/api/placeholder/80/80",
      description:
        "Started Aloka Enterprises with a mission to deliver honest and reliable air conditioning services across the region.",
    },
    {
      name: "Sarah Thompson",
      role: "Senior HVAC Technician",
      experience: "12+ years",
      certifications: ["EPA Certified", "HVAC Excellence"],
      avatar: "/api/placeholder/80/80",
      description:
        "Specializes in energy-efficient installations and advanced troubleshooting for residential and commercial systems.",
    },
    {
      name: "Mike Johnson",
      role: "Customer Service Manager",
      experience: "8+ years",
      certifications: ["Customer Service Excellence"],
      avatar: "/api/placeholder/80/80",
      description:
        "Ensures every customer receives exceptional support from first call to completion — satisfaction guaranteed.",
    },
  ];

  const companyValues = [
    {
      icon: (
        <VerifiedUserIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      ),
      title: "Trust & Integrity",
      description:
        "Honest assessments, transparent pricing — no hidden costs or unnecessary repairs.",
    },
    {
      icon: (
        <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: "Fast Response",
      description:
        "Same-day service available. Emergency calls answered within 2 hours.",
    },
    {
      icon: (
        <BuildIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: "Expert Craftsmanship",
      description:
        "All technicians are licensed, insured, and trained in the latest HVAC technologies.",
    },
    {
      icon: (
        <EcoIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: "Energy Efficiency",
      description:
        "We help you save energy with eco-friendly solutions and system upgrades.",
    },
  ];

  const achievements = [
    { label: "Years in Business", value: 15, max: 20 },
    { label: "Customer Satisfaction", value: 98, max: 100 },
    { label: "Licensed Technicians", value: 8, max: 10 },
    { label: "Service Areas Covered", value: 12, max: 15 },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: theme.palette.primary.contrastText,
          py: 10,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          About Aloka Enterprises
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, maxWidth: 800, mx: "auto", opacity: 0.9 }}
        >
          Delivering trusted Air Conditioning and Refrigeration solutions with
          innovation, speed, and integrity since 2010.
        </Typography>
      </Box>

      {/* Story + Mission */}
      <Grid container spacing={6} sx={{ px: { xs: 2, md: 8 }, mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Aloka Enterprises began with a clear goal — to redefine how cooling
            services are delivered. With an unwavering commitment to quality and
            transparency, we’ve grown into a trusted name in HVAC solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            Today, our team of experts provides world-class installations,
            maintenance, and support across multiple regions, ensuring comfort
            and efficiency in every project.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              p: 4,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, fontStyle: "italic", opacity: 0.9 }}
            >
              "To provide every customer with reliable, honest, and professional
              air conditioning services that exceed expectations."
            </Typography>

            {achievements.map((ach, idx) => (
              <Box key={idx} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  <Typography variant="body2">{ach.label}</Typography>
                  <Typography variant="body2">
                    {ach.value}
                    {ach.max === 100 ? "%" : ""}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(ach.value / ach.max) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.3)",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: theme.palette.secondary.main,
                    },
                  }}
                />
              </Box>
            ))}
          </Card>
        </Grid>
      </Grid>

      {/* Company Values */}
      <Box sx={{ px: { xs: 2, md: 8 }, mb: 8 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {companyValues.map((val, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{val.icon}</Box>
                <Typography variant="h6" gutterBottom color="text.secondary">
                  {val.title}
                </Typography>
                <Typography variant="body2">{val.description}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, mb: 8 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Meet Our Expert Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                }}
              >
                <Avatar
                  src={member.avatar}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    bgcolor: theme.palette.secondary.main,
                  }}
                >
                  {member.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Chip
                  label={member.experience}
                  size="small"
                  color="secondary"
                  sx={{ mb: 2 }}
                />
                <Typography variant="body2" paragraph>
                  {member.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {member.certifications.map((cert, i) => (
                    <Chip
                      key={i}
                      label={cert}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.main,
                        m: 0.5,
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Certifications & Awards */}
      <Box
        sx={{
          textAlign: "center",
          p: 6,
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h3" gutterBottom color="text.secondary">
          Licensed, Certified & Award-Winning
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Chip
              icon={<VerifiedUserIcon />}
              label="EPA Certified"
              color="primary"
            />
          </Grid>
          <Grid item>
            <Chip
              icon={<SchoolIcon />}
              label="NATE Certified"
              color="primary"
            />
          </Grid>
          <Grid item>
            <Chip
              icon={<EmojiEventsIcon />}
              label="BBB A+ Rating"
              color="primary"
            />
          </Grid>
          <Grid item>
            <Chip
              icon={<BusinessCenterIcon />}
              label="Licensed & Insured"
              color="primary"
            />
          </Grid>
          <Grid item>
            <Chip
              icon={<GroupIcon />}
              label="Customer Choice Award 2024"
              color="secondary"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
