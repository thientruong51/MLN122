import { Typography, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
    },
  }),
};

const Conclusion = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          px: 4,
          py: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/bg-4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div variants={fadeInUp} custom={1}>
          <Typography
            variant="h3"
            fontFamily="serif"
            fontWeight="bold"
            gutterBottom
            color="#f1c40f"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            <EmojiObjectsIcon fontSize="large" /> PHẦN 4: KẾT LUẬN & BÀI HỌC RÚT RA
          </Typography>
        </motion.div>

        <Stack spacing={3} maxWidth={900} mt={6} sx={{ px: { xs: 2, md: 4 } }}>
          <motion.div variants={fadeInUp} custom={2}>
            <Typography
              variant="h5"
              color="#fafafa"
              fontStyle="italic"
              sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
            >
              Câu chuyện vua Midas không chỉ là truyện cổ tích, mà là lời nhắc nhở: vật chất không có giá trị nếu không đáp ứng được nhu cầu con người.
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp} custom={3}>
            <Typography
              variant="h4"
              color="#f1c40f"
              fontWeight="bold"
              sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Theo C. Mác:
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp} custom={4}>
            <Stack spacing={2}>
              <Typography variant="h5" color="#f0f0f0">
                <ProductionQuantityLimitsIcon
                  sx={{ mr: 1, verticalAlign: 'middle', color: '#f1c40f' }}
                />{' '}
                Giá trị thật sự của nền kinh tế nằm ở sức sản xuất – tức là khả năng tạo ra hàng hóa có ích cho đời sống.
              </Typography>

              <Typography variant="h5" color="#f0f0f0">
                <CurrencyExchangeIcon
                  sx={{ mr: 1, verticalAlign: 'middle', color: '#f1c40f' }}
                />{' '}
                Tiền chỉ có ích khi đi kèm với sự lưu thông hàng hóa thực tế.
              </Typography>
            </Stack>
          </motion.div>

          <motion.div variants={fadeInUp} custom={5}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#f1c40f"
              mt={4}
            >
              Tóm lại:
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp} custom={6}>
            <Typography variant="h5" color="#fff" sx={{ fontWeight: 500 }}>
              Một đất nước muốn giàu không thể chỉ in thêm tiền hay tích trữ vàng, mà cần thúc đẩy sản xuất,
              tạo ra nhiều sản phẩm và dịch vụ thực tế, phục vụ con người.
            </Typography>
          </motion.div>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default Conclusion;