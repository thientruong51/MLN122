import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#000',
        px: { xs: 2, md: 8 },
        py: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontFamily: 'serif', color: '#fff', letterSpacing: 1 }}
        >
          EXPERT
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Typography variant="body2" color="#ccc">
            Mã môn: <strong>MLN122</strong>
          </Typography>
          <Typography variant="body2" color="#ccc">
            Lớp: <strong>SU25_MLN122_IB1705</strong>
          </Typography>
          <Typography variant="body2" color="#ccc">
            GV: <strong>Nguyễn Văn Bình</strong>
          </Typography>
        </Box>

        <IconButton sx={{ color: '#fff' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
