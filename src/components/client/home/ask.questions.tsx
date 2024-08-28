import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem } from '@mui/material';

interface IFrom {
  title: string;
  link: string;
}

const forms: IFrom[] = [
  {
    title: "Biểu mẫu đăng ký miễn học phần",
    link: "#"
  },
  {
    title: "Biểu mẫu đăng ký học phần",
    link: "#"
  },
  {
    title: "Biểu mẫu tạm hoãn nghĩa vụ quân sự",
    link: "#"
  },
  {
    title: "Biểu mẫu sao lưu kết quả học tập",
    link: "#"
  },
]

export default function AskQuestion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Some questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle1">
              How do you contact us?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You can contact us by emailing
              <Link> support@email.com </Link>
              or calling our toll-free number: <Link>0123456789</Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle1">
              Can you need forms?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {forms && forms.map((form, index) => {
                return (
                  <ListItem key={`list-item-form-${index}`} sx={{ ":hover": { opacity: 0.8, transition: "0.5s" } }}>
                    <a href={form.link} style={{ textDecoration: "unset" }}>
                      <FileDownloadIcon sx={{ position: "relative", top: 5 }} />
                      &nbsp; {form.title}
                    </a>
                  </ListItem>
                )
              })}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle1">
              Want to collaborate on research?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '100%' } }}
            >
              If you want to collaborate on research with us about: land, planning, remote sesing, GIS and orther. Please contact with us by phone or offline meeting.
              Our location at 3/2 Street, Ninh Kieu Province, Can Tho City.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
