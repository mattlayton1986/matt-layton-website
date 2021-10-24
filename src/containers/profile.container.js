import React from 'react'
import TextContainer from './text.container'
import Typography from '@mui/material/Typography'

const Profile = ({ profile }) => (
  <TextContainer align={{ xl: "flex-start" }}>
    <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
      Profile
    </Typography>
    <Typography variant="body1" align="left" paragraph>
      {profile}
    </Typography>
  </TextContainer>
);

export default Profile