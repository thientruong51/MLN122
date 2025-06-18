import { Typography, Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = () => {
    const target = document.getElementById('content-start');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
          px: { xs: 2, sm: 4 },
          overflow: 'hidden',
        }}
      >
        {/* Video Background */}
        <Box
          component="video"
          src="/videos/bg-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
            zIndex: 0,
          }}
        />

        {/* Artistic Header */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, md: 8 },
            py: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontFamily: 'serif',
              color: '#fff',
              letterSpacing: 2,
              borderBottom: '2px solid #f1c40f',
              pb: 0.5,
            }}
          >
            EXPERT
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.5, sm: 4 }} sx={{ fontSize: 13, color: '#ccc' }}>
            <Typography>MLN122</Typography>
            <Typography>Lớp: SU25_MLN122_IB1705</Typography>
            <Typography>GV: Nguyễn Văn Bình</Typography>
          </Stack>
        </Stack>

        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 2,
            maxWidth: { xs: '90%', sm: 800 },
            mx: 'auto',
            mt: { xs: 4, sm: 0 },
          }}
        >
          <Typography
            variant="h3"
            fontFamily="serif"
            fontWeight={600}
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontSize: { xs: '1.5rem', sm: '2.5rem' },
            }}
            color="#f1c40f"
          >
            Có phải trong mọi nền kinh tế, càng nhiều vàng và tiền thì càng tốt không?
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 3, color: '#ddd', fontSize: { xs: '0.95rem', sm: '1.1rem' } }}
          >
            Một bài học từ một câu chuyện nổi tiếng trong thần thoại Hy Lạp về vị vua Midas và thông qua lý luận kinh điển của C. Mác về hàng hóa và sản xuất hàng hóa trong kinh tế chính trị học
          </Typography>
          <Button
            variant="outlined"
            onClick={handleScroll}
            sx={{
              mt: 4,
              borderColor: '#f1c40f',
              color: '#f1c40f',
              px: 6,
              py: 1.5,
              borderRadius: '50px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
              },
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            Bắt đầu
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Hero;