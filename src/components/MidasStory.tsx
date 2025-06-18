// src/components/MidasStory.tsx
import { Typography, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MidasStory = () => {
  return (
    <Box
      id="content-start"
      sx={{
        position: 'relative',
        minHeight: '110vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: 'center',
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        src="/videos/bg-midas.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 2, width: '100%' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Hình minh họa bên trái */}
          <Box
            component="img"
            src="/images/midas.png"
            alt="King Midas"
            sx={{
              width: { xs: '100%', sm: '90%', md: '85%' },
              maxWidth: 780,
              borderRadius: 3,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              mx: 'auto',
            }}
          />

          {/* Nội dung chữ bên phải */}
          <Stack
            spacing={2}
            sx={{
              mt: { xs: 4, md: 0 },
              maxWidth: 700,
              mx: { xs: 'auto', md: 0 },
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              fontFamily="serif"
              color="#f1c40f"
            >
              Câu chuyện vua Midas
            </Typography>
            <Typography variant="h6" fontWeight={600} color="#f1c40f">
              Một điều ước biến mọi thứ ông chạm vào thành vàng...
            </Typography>
            <Typography variant="body1" sx={{ color: '#ddd', lineHeight: 1.8 }}>
              Vua Midas là một vị vua giàu có và đầy tham vọng. Khi được thần Dionysus ban cho một điều ước,
              ông đã chọn: “Hãy để mọi thứ ta chạm vào biến thành vàng.” Ban đầu, ông vô cùng sung sướng:
              cây cối, ngai vàng, thậm chí là trái cây đều trở thành vàng ròng dưới tay ông.
            </Typography>
            <Typography variant="body1" sx={{ color: '#ddd', lineHeight: 1.8 }}>
              Nhưng niềm vui chóng tàn khi ông không thể ăn, không thể uống. Khi ôm con gái mình – cô bé
              cũng hóa thành tượng vàng lạnh lẽo. Midas đau khổ, cầu xin thần linh thu hồi điều ước, từ bỏ
              vàng để đổi lấy cuộc sống và tình yêu thật sự.
            </Typography>
          </Stack>
        </Box>
      </motion.div>
    </Box>
  );
};

export default MidasStory;
