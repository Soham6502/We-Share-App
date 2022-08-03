import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">
          "We share together, We Grow together"
        </Typography>
        <Text variant="h5">
          I am Soham Sakhareliya final year Engineering Student at NIT Agartala
          !
          <br />
          The solo Focus of this application is to share each others
          Experiences/perspectives/information or own research on various
          fields.
        </Text>
        <Text variant="h5">
          If you want to reach out to me , connect to me on Instagram
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/sohamsakhareliya/"
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email at
          <Link
            href="mailto:sohamsakhareliya@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
